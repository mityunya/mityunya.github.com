const express = require("express")

const app = express()

const PORT = process.env.PORT || 80

const public = express.static(__dirname)
app.use(public)

app.get("/", (req, res) => {

    return res.sendFile(__dirname + "/Vol'ga.html")

})

app.listen(PORT, () => console.log("Started on: " + PORT))