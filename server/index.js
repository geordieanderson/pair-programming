const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
const { v4: uuid } = require('uuid');

app.use(cors());
app.use(express.json());


let scores = [
    {
        id: 1,
        name: 'Matt',
        chip: '',
        score: 300,
    },
    {
        id: 2,
        name: 'Raveena',
        chip: '',
        score: 200,
    },
    {
        id: 3,
        name: 'Geordie',
        chip: '',
        score: 100,
    }
]

app.get('/scores', (req, res) => {
    console.log('grabbing scores');
    res.json(scores);
});

app.post('/scores', (req, res) => {
    const { name, chip, score } = req.body;

    scores.push({
        id: uuid4(),
        name,
        chip,
        score,
    });

    res.json(scores);

    res.status(201).json(newScore)
})

app.listen(port, () => {
    console.log (`server listening on ${port}`)
})