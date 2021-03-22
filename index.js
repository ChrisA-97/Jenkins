const express = require("express")
const app = require("express")()
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(function(req, res, next) {
    let origin = req.headers.origin || '*';
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('index.html'))

app.route("/message").get((req, res) => {
    res.json({"message": Math.floor(Math.random() * 6) + 1})
}).post((req, res) => {
    res.json({"message": "Thanks for the POST"})
})

app.route("/").get((req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(5000, function () {
    console.log('CORS-enabled web server listening on port 5000')
  })