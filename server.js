const express = require("express");
const app = express();


// Ссылаемся на статические файлы
app.use(express.static('./'));


// Возвращаем index.html
app.get("/", function(req, res) {
  res.sendFile("index.html");
})


// Разворачиваем приложение(определяем порт)
const listener = app.listen("3000", function () {
  console.log("ТВОЕ ПРИЛОЖЕНИЕ РАЗВЕРНУТО НА ПОРТУ " + "3000")
})