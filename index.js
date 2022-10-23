const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const places = require('./data/places.json');
const rooms = require('./data/rooms.json');

app.get('/', (req, res) => {
    res.send('Travel-Kori Server is running.');
})

app.get('/places', (req, res) => {
    res.send(places);
})

app.get('/places/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const place = places.find(p => p.id === id);
    res.send(place);
})

app.get('/rooms', (req, res) => {
    res.send(rooms);
})

app.listen(port, () => {
    console.log("server is running on port:", port);
})