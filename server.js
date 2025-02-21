const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const MenuItem= require('./models/MenuItem');

app.get('/', function (req, res) {
    res.send('Hello World....How can i help you')
})


const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/MenuItem',menuRoutes);




app.listen(3000, () => {
    console.log("listening on port 3000");
})