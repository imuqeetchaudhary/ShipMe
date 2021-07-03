const mongoose = require("mongoose")
const schema = mongoose.Schema

const companySchema = new schema({
    name: {
        type: String,
        require: true
    },
    manager: {
        type: schema.Types.ObjectId,
        require: true
    }
})

const companyUserSchema = new schema({
    userId: {
        type: schema.Types.ObjectId,
        require: true
    },
    isManager: {
        type: Boolean,
        default: false
    }
})

exports.Company = mongoose.model("Company", companySchema)
exports.CompanyUser = mongoose.model("CompanyUser", companyUserSchema)