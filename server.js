const express = require("express");
const app = express();

app.use(express.static('./'));


app.get("/", function(req, res) {
  res.sendFile("index.html");
})

const listener = app.listen(process.env.PORT, function () {
  console.log("ТВОЕ ПРИЛОЖЕНИЕ РАЗВЕРНУТО НА ПОРТУ " + process.env.PORT)
})