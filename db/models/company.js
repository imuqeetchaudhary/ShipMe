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
    },
    address: {
        type: String,

    },
    city: {
        type: String,

    },
    zipCode: {
        type: Number,

    },
    email: {
        type: String,

    },
    website: {
        type: String,

    },
    number: {
        type: Number,

    },
    primaryContactName: {
        type: String,
    },
    primaryContactNumber: {
        type: Number,
    },
    primaryContactJobTitle: {
        type: String,
    }
})

const companyUserSchema = new schema({
    companyId: {
        type: schema.Types.ObjectId,
        require: true
    },
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