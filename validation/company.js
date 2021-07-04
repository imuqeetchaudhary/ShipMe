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