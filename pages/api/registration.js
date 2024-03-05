import { hash } from 'bcrypt';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.LOCAL_DB_URL
});

export default async function register(req, res) {
    if (req.method === 'POST') {
        const { username, password, first_name, last_name, email } = req.body;
        const hashedPassword = await hash(password, 10);

        try {
            // Check if the username or email already exists in the database
            const existingUser = await pool.query(
                'SELECT * FROM users WHERE username = $1 OR email = $2',
                [username, email]
            );

            if (existingUser.rows.length > 0) {
                // If a user is found, send an error response
                return res.status(409).send('Username or email already exists');
            } else {
                // If no user is found, insert the new user into the database
                const result = await pool.query(
                    'INSERT INTO users(username, password_hash, first_name, last_name, email) VALUES($1, $2, $3, $4, $5) RETURNING *',
                    [username, hashedPassword, first_name, last_name, email]
                );
                return res.status(201).send({ user: result.rows[0] });
            }
        } catch (error) {
            // If there's an error in the database query, send an error response
            return res.status(500).send('User registration failed');
        }
    } else {
        // Block non-POST requests
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}