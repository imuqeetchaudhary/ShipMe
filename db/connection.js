const mongoose = require("mongoose")

exports.connection = mongoose.connect("mongodb+srv://muqeet_chaudhary:Abdul6890060@cluster0.bqu75.mongodb.net/ShipMe", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})