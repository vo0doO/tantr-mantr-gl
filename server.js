const express = require("express");
const app = express();

app.use(express.static('./'));

// Возвращаем 
app.get("/", function(req, res) {
  res.sendFile("index.html");
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

const listener = app.listen(process.env.PORT, function () {
  console.log("ТВОЕ ПРИЛОЖЕНИЕ РАЗВЕРНУТО НА ПОРТУ " + process.env.PORT)
})