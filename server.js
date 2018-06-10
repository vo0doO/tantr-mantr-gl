const express = require("express");
const app = express();

const pay = require("/sqpaymentform.js")


// Ссылаемся на статические файлы
app.use(express.static('./'));

// Возвращаем index.html
app.get("/", function(req, res) {
  res.sendFile("index.html");
})

// Возвращаем Readme.md
app.get("/readme", function(req, res) {
  res.sendFile("/app/README.md")
})

// Возвращаем edit.html
app.get("/edit", function(req, res) {
  res.sendFile("/app/edit.html")
})

// Возвращаем concept.html
app.get("/concept", function(req, res) {
  res.sendFile("/app/concept.html")
})

app.get("/process-card", function(req, res) {
  console.log(req.data)
  console.log(res.data)
  res.sendFile("/app/concept.html")
})

// Разворачиваем приложение(определяем порт)
const listener = app.listen(process.env.PORT, function () {
  console.log("ТВОЕ ПРИЛОЖЕНИЕ РАЗВЕРНУТО НА ПОРТУ " + process.env.PORT)
})