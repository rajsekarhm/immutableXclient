const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

app.get('/', async (req, res) => {
    try {
        const password = await bcrypt.hash('pass@1234', 10);
        const token = jwt.sign(
            {
                name: 'rajasekar',
                pass: password,
            },
            'shhhhh',
            {
                expiresIn: '5h',
            }
        );
        const option = { expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) };
        res.status(201).cookie('jwt', token, option).json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});
