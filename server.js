import './facts.json';

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({origin: '*'}));

app.get('/api/endpoints', (req, res) => {
    res.json({
        message: 'Це API-сервер. Будь ласка, надсилайте запити з клієнтської сторони (браузер, Postman, fetch тощо) на конкретні ендпоінти нижче',
        endpoints: [
            'GET /api/facts'
        ]
    });
});

app.get('/api/facts', (req, res) => {
    res.json(facts);
});