const jwt = require('jsonwebtoken');
const config = require('./config');

module.exports = {
    isLogin(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Forbidden: Invalid token' });
            }
            req.userId = decoded.userId;
            req.username = decoded.username;
            next();
        });
    },
    isLogout(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            next();
        } else {
            jwt.verify(token, config.jwtSecret, (err, decoded) => {
                if (err) {
                    next();
                } else {
                    res.redirect('/home');
                }
            });
        }
    }
};
