const jwt = require('jsonwebtoken');
const config = require('../library/config');

module.exports = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'Token not provided' });

    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            console.error('Error verifying JWT token:', err);
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.userId = decoded.userId;
        req.username = decoded.username;
        next();
    });
};
