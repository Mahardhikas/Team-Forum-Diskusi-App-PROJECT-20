// LoginController.js
const jwt = require('jsonwebtoken');
const config = require('../library/config');

module.exports = {
    loginAuth(req, res) {
        const { email, password } = req.body;
        if (email && password) {
            pool.query('SELECT * FROM user WHERE email = ?', [email], (error, results) => {
                if (error) {
                    console.error('Error executing query:', error);
                    return res.status(500).json({ message: 'Database error' });
                }
                if (results.length > 0) {
                    const user = results[0];
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) {
                            console.error('Error comparing password:', err);
                            return res.status(500).json({ message: 'Error during login' });
                        }
                        if (isMatch) {
                            const payload = { userId: user.user_id, username: user.username };
                            const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
                            return res.status(200).json({ message: 'Login successful', token });
                        } else {
                            return res.status(401).json({ message: 'Invalid email or password' });
                        }
                    });
                } else {
                    return res.status(401).json({ message: 'Invalid email or password' });
                }
            });
        } else {
            return res.status(400).json({ message: 'Please enter email and password' });
        }
    },

    logout(req, res) {
        // Implementasi logout, misal dengan menghapus sesi
        req.session.destroy((err) => {
            if (err) {
                console.error('Logout error:', err);
                return res.status(500).json({ message: 'Logout error' });
            }
            res.clearCookie('jwtToken'); // Sesuaikan jika Anda menggunakan nama cookie yang berbeda
            return res.status(200).json({ message: 'Logout successful' });
        });
    }
};
