const yup = require("yup")

exports.addUserSchema = yup.object({
    userId: yup.string().required(),
    isManager: yup.boolean().required()
})