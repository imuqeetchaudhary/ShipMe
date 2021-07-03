const yup = require("yup")

exports.addUserSchema = yup.object({
    userId: yup.string().required(),
    isManager: yup.boolean().required()
})

exports.deleteCompanySchema = yup.object({
    companyId: yup.string().required()
})