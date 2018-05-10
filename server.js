const express = require("express");
const app = express();

app.use(express.static('./'));


app.get("/", function(req, res) {
  res.sendFile("index.html");
})

app.get("/mail", function(req, res) {
  res.sendFile("/app/mail.html")
})

app.get("/reciever.html", function(req, res) {
  res.sendFile("/app/reciever.html")
})
app.get("/readme", function(req, res) {
  res.sendFile("/app/README.md")
})

app.get("/edit", function(req, res) {
  res.sendFile("/app/edit.html")
})
app.get("/concept", function(req, res) {
  res.sendFile("/app/concept.html")
})
app.get("/payment", function(req, res) {
  res.sendFile("/app/payment.html")
})
const listener = app.listen(process.env.PORT, function () {
  console.log("ТВОЕ ПРИЛОЖЕНИЕ РАЗВЕРНУТО НА ПОРТУ " + process.env.PORT)
})