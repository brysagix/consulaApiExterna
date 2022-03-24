require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2/promise');
const port = 3001;
const bluebird = require('bluebird');
const e = require('express');

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

app.use
app.use(express.json());
app.use(cors({ origin: true }))
app.set('port',process.env.PORT || port)



app.get('/geti', async (req, res) => {

    const resultado =  await fetch('https://api.github.com/users/github');
    await res.json(resultado)
    console.log(resultado);
  })


app.get('/saludo', (req, res) => {
    res.send('Hello World!')
  })


app.listen(app.get('port'), async() =>{
    console.log("Servidor running on port: " + port);
});
