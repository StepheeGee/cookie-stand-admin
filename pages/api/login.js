// pages/api/login.js
import { compare } from 'bcrypt';
import { Pool } from 'pg';
import { sign } from 'jsonwebtoken';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Use DATABASE_URL from .env.local
});

export default async function login(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        try {
            const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

            if (user.rows.length > 0) {
                const isValid = await compare(password, user.rows[0].password_hash);

                if (!isValid) {
                    return res.status(401).json({ success: false, error: 'Invalid password' });
                }

                const token = sign(
                    { username: user.rows[0].username, id: user.rows[0].id },
                    process.env.AUTH_SECRET,
                    { expiresIn: '1h' }
                );

                return res.status(200).json({ success: true, token });
            } else {
                return res.status(404).json({ success: false, error: 'User not found' });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, error: 'Login failed' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
    }
}