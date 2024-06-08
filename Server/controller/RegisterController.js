const pool = require('../library/database');
const bcrypt = require('bcrypt');

module.exports = {
    async saveRegister(req, res) {
        console.log('Received registration request'); // Log untuk permintaan yang diterima
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            console.log('Validation failed: missing fields');
            return res.status(400).json({ message: 'All fields are required' });
        }

        try {
            const connection = await pool.getConnection(); // Mendapatkan koneksi dari pool

            try {
                console.log('Connected to database'); // Log koneksi database

                // Periksa apakah email sudah digunakan
                const [rows] = await connection.execute('SELECT * FROM user WHERE email = ?', [email]);
                if (rows.length > 0) {
                    return res.status(400).json({ message: 'Email already used' });
                }

                // Hash password dan simpan user baru
                const hashedPassword = await bcrypt.hash(password, 10);
                await connection.execute(
                    'INSERT INTO user (username, email, password) VALUES (?, ?, ?)',
                    [username, email, hashedPassword]
                );

                console.log('User registered successfully'); // Log keberhasilan
                res.json({ message: 'Registration successful' });

            } finally {
                connection.release(); // Melepaskan koneksi kembali ke pool
            }
        } catch (error) {
            console.error('Error processing registration:', error);
            res.status(500).json({ message: 'Error processing registration' });
        }
    }
};
