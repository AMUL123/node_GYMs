const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;


const MenuItem= require('./models/MenuItem');

app.get('/', function (req, res) {
    res.send('Hello World....How can i help you')
})


const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/MenuItem',menuRoutes);




app.listen(PORT, () => {
    console.log("listening on port 3000");
})