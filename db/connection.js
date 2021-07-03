const mongoose = require("mongoose")

exports.connection = mongoose.connect("mongodb://localhost:27017/ShipMe", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})