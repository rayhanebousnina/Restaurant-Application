// Importing Express Js

const express = require("express");
const app = express();
const db = require('./config/database');
db();

app.use(express.json());

// Importing cors and body parser

const cors = require('cors');
// const bodyParser = require('body-parser');

// Importing routes
const dishes = require("./routes/dishesRoute")

// Create a simple route

app.use('/home', dishes)

// Calling the cors

app.use(cors());

// To enable access the data
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/home', createProxyMiddleware({
    target : 'http://localhost:8080/',
    changeOrigin : true,
    onProxyRes : function (proxyRes, req, res) {
        proxyRes.headers['access-control-allow-origin'] = '*';
    }
}))
// Server connexion

let PORT = 5000;

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error when running the server")
    } else {
        console.log(`Server is ruunnig on port ${PORT}`)
    }
})