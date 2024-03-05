import { compare } from 'bcrypt';
import { Pool } from 'pg';
import { sign } from 'jsonwebtoken';

const pool = new Pool({
    connectionString: process.env.LOCAL_DB_URL
});

export default async function login(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        try {
            const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

            if (user.rows.length > 0) {
                const isValid = await compare(password, user.rows[0].password_hash);

                if (!isValid) {
                    return res.status(401).send('Unauthorized');
                }

                // Generate JWT token for authenticated user using the AUTH_SECRET from .env.local
                const token = sign(
                    { username: user.rows[0].username, id: user.rows[0].id },
                    process.env.AUTH_SECRET,
                    { expiresIn: '1h' }
                );
                return res.status(200).json({ token });
            } else {
                return res.status(404).send('User not found');
            }
        } catch (error) {
            console.error(error);
            return res.status(500).send('Login failed');
        }
    } else {
        // Block non-POST requests
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}