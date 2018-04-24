const express = require("express");
const app = express();

app.use(express.static('./'));


app.get("/", function(req, res) {
  res.sendFile("index.html");
})

app.get("/mail", function(req, res) {
  res.sendFile("/app/mail.html")
})

app.get("/reciever", function(req, res) {
  res.sendFile("/app/_reciever.html")
})
const listener = app.listen(process.env.PORT, function () {
  console.log("ТВОЕ ПРИЛОЖЕНИЕ РАЗВЕРНУТО НА ПОРТУ " + process.env.PORT)
})