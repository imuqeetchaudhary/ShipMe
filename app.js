const express = require("express")
const bodyParser = require("body-parser")
const { connection } = require("./db/connection")
const user = require("./routes/user")
const company = require("./routes/company")
const cors = require("cors")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get("/", async (req, res) => {
    res.json({ message: "ShipMe Rest Api" })
})

app.use("/user", user)
app.use("/company", company)

module.exports = { app }