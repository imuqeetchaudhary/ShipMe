const yup = require("yup")

exports.addUserSchema = yup.object({
    companyId: yup.string().required(),
    userId: yup.string().required(),
    isManager: yup.boolean().required()
})

exports.deleteCompanySchema = yup.object({
    companyId: yup.string().required()
})

exports.getUserCompanySchema = yup.object({
    userId: yup.string().required()
})

exports.createCompanySchema = yup.object({
    name: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    zipCode: yup.number().required(),
    email: yup.string().required(),
    website: yup.string().required(),
    number: yup.number().required(),
    primaryContactName: yup.string().required(),
    primaryContactNumber: yup.number().required(),
    primaryContactJobTitle: yup.string().required()
})

exports.allCompanyUsersSchema = yup.object({
    companyId: yup.string().required()
})

exports.editCompanyUserSchema = yup.object({
    companyId: yup.string().required(),
    userId: yup.string().required()
})