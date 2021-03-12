const express = require('express');
const app = express();
const port = 8080;
const { v4: uuid } = require('uuid');

app.use(express.json());

let players = [
    {
        id: 1,
        name: 'Matt',
        chip: '',
        score: '',
    },
    {
        id: 2,
        name: 'Raveena',
        chip: '',
        score: '',
    },
    {
        id: 3,
        name: 'Geordie',
        chip: '',
        score: '',
    }
]

app.get('/players', (req, res) => {
    console.log('grabbing players');
    res.json(players);
});

app.listen(port, () => {
    console.log (`server listening on ${port}`)
})