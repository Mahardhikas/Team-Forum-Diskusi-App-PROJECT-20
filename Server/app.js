// app.js (backend)
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('req-flash');

// Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const sessionRouter = require('./routes/session');
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');

// Middleware
const verifyUser = require('./library/verify');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:8082', // Sesuaikan dengan URL frontend Anda
  credentials: true
}));

app.use(session({
  secret: 'keydiscussionappsecret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 }
}));
app.use(flash());

// Serve static files from the Vue app
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

// API routes
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/session', sessionRouter);
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);

// Protect the routes
app.use('/home', verifyUser.isLogin, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

// Redirect /login to /home if user is logged in
app.get('/login', verifyUser.isLogin, (req, res) => {
    res.redirect('/home');
});

app.get('*', verifyUser.isLogout, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({ error: err.message });
});

// Start the server
app.listen(8081, () => {
  console.log('Server is running on http://localhost:8081');
});

module.exports = app;
