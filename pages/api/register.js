import { hash } from 'bcrypt';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.LOCAL_DB_URL,
});

export default async function register(req, res) {
    if (req.method === 'POST') {
        const { username, password, first_name, last_name, email } = req.body;
        const hashedPassword = await hash(password, 10);

        try {
            const existingUser = await pool.query(
                'SELECT * FROM users WHERE username = $1 OR email = $2',
                [username, email]
            );

            if (existingUser.rows.length > 0) {
                return res.status(409).json({ success: false, error: 'Username or email already exists' });
            } else {
                const result = await pool.query(
                    'INSERT INTO users(username, password_hash, first_name, last_name, email) VALUES($1, $2, $3, $4, $5) RETURNING *',
                    [username, hashedPassword, first_name, last_name, email]
                );

                return res.status(201).json({ success: true, user: result.rows[0] });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, error: 'User registration failed' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
    }
}