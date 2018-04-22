var app = require("express")


app.use(__dirname, function(req, res) {
  res.sendFile("index.html")
})

app.li