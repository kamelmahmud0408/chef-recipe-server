const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefdata = require('./data/chefdata.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('chef Data is coming')
})

app.get('/chefdata', (req, res) => {
    res.send(chefdata);
})

app.get('/chefdata/:id', (req, res) => {
    const id = req.params.id;
    const singleChef = chefdata.find(n => n.id === id);
    res.send(singleChef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})