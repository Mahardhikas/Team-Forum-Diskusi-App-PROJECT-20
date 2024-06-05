const config = require('../library/database');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');

const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    async saveRegister(req, res) {
        console.log('Received registration request'); // Log untuk permintaan yang diterima
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            console.log('Validation failed: missing fields');
            return res.status(400).json({ message: 'All fields are required' });
        }

        try {
            pool.getConnection((err, connection) => {
                if (err) {
                    console.error('Error connecting to database:', err);
                    return res.status(500).json({ message: 'Database error' });
                }

                console.log('Connected to database'); // Log koneksi database
                
                // Periksa apakah email sudah digunakan
                connection.execute('SELECT * FROM user WHERE email = ?', [email], async (err, results) => {
                    if (err) {
                        connection.release();
                        console.error('Error executing query:', err);
                        return res.status(500).json({ message: 'Error checking email' });
                    }
                    
                    if (results.length > 0) {
                        connection.release();
                        return res.status(400).json({ message: 'Email already used' });
                    }

                    // Hash password dan simpan user baru
                    const hashedPassword = await bcrypt.hash(password, 10);
                    connection.execute(
                        'INSERT INTO user (username, email, password) VALUES (?, ?, ?)',
                        [username, email, hashedPassword],
                        (error, results) => {
                            connection.release();

                            if (error) {
                                console.error('Error executing query:', error);
                                return res.status(500).json({ message: 'Error saving user' });
                            }

                            console.log('User registered successfully'); // Log keberhasilan
                            res.json({ message: 'Registration successful' });
                        }
                    );
                });
            });
        } catch (error) {
            console.error('Error hashing password:', error);
            res.status(500).json({ message: 'Error processing registration' });
        }
    }
};
