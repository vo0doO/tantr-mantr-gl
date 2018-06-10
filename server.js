const express = require("express");
const app = express();


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

app.get("/process-card", function(req, res) {
  con
})
// Возвращаем edit.html
app.get("/edit", function(req, res) {
  res.sendFile("/app/edit.html")
})

// Возвращаем concept.html
app.get("/concept", function(req, res) {
  res.sendFile("/app/concept.html")
})

// Разворачиваем приложение(определяем порт)
const listener = app.listen(process.env.PORT, function () {
  console.log("ТВОЕ ПРИЛОЖЕНИЕ РАЗВЕРНУТО НА ПОРТУ " + process.env.PORT)
})