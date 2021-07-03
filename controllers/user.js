const { User } = require("../db/models/user")
const { Company, CompanyUser } = require("../db/models/company")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")

exports.profile = promise(async (req, res) => {
    const user = await User.findOne({ email: req.user.email })
    res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email
    })
})

exports.register = promise(async (req, res) => {
    const body = req.body
    const emailExists = await User.findOne({ email: req.body.email })
    if (emailExists) throw new Exceptions.EmailExist

    const hash = bcrypt.hashSync(req.body.password, 10)
    const newUser = new User({
        ...body,
        name: `${body.firstName} ${body.lastName}`,
        password: hash
    })
    const saveUser = await newUser.save()

    const user = await User.findOne({email: body.email})
    if(!user) throw new Exceptions.NotFound("User not found")

    const newCompany = new Company({
        name: `${body.firstName} ${body.lastName}`
    })

    const newCompanyUser = new CompanyUser({
        userId: user._id,
        isManager: true
    })

    const saveCompany = await newCompany.save()
    console.log("Successfully added a new company");
    const saveCompanyUser = await newCompanyUser.save()
    console.log("Successfully added a new company user");

    res.status(200).json({
        message: "Successfully register a new user and his company",
        user: newUser
    })
})

exports.login = promise(async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) throw new Exceptions.CredentialsNotMatched

    const matchedPassword = await bcrypt.compareSync(req.body.password, user.password)
    if (!matchedPassword) throw new Exceptions.CredentialsNotMatched

    const token = await jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    }, process.env.ACCESS_TOKEN_SECRET)

    res.status(200).json({
        token: token,
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    })
})