const yup = require("yup")

exports.registerSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
        .string()
        .required()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        )
})

exports.loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
})