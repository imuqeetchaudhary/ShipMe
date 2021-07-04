const { Company, CompanyUser } = require("../db/models/company")
const { User } = require("../db/models/user")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")
const { sendMail } = require("../middlewares/sendMail")

exports.addCompanyUser = promise(async (req, res) => {
    const body = req.body

    const company = await Company.findOne({ _id: body.companyId })
    if (!company) throw new Exceptions.NotFound("Company not found")

    const user = await User.findOne({ _id: body.userId })
    if (!user) throw new Exceptions.NotFound("User not found")

    const email = user.email
    const message = `You are invited as a company user in ${company.name} company`

    const newCompanyUser = new CompanyUser({
        ...body
    })

    await newCompanyUser.save()
    sendMail(email, message, res)
})

exports.editCompany = promise(async (req, res) => {
    await Company.updateOne(
        { manager: req.user._id },
        {
            $set: {
                ...req.body
            }
        }
    )
    res.status(200).json({ message: "Successfully updated company profile" })
})

exports.allCompanies = promise(async (req, res) => {
    const company = await Company.find()
    if (!company) throw new Exceptions.NotFound("No company found")

    res.status(200).json({ companies: company })
})

exports.allUserCompanies = promise(async (req, res) => {
    const body = req.body

    const company = await Company.find({ manager: body.userId })
    if (!company) throw new Exceptions.NotFound("No company found")

    res.status(200).json({ companies: company })
})

exports.deleteCompany = promise(async (req, res) => {
    const body = req.body

    const company = await Company.findOne({ _id: body.companyId })
    if (!company) throw new Exceptions.NotFound("No company found")

    if (req.user.isAdmin == true) {
        await Company.deleteOne({ _id: body.companyId })
        await User.deleteOne({ _id: company.manager })

        res.status(200).json({ message: "Successfully deleted company and user" })
    }
    else {
        res.status(400).json({ message: "Bad Request! Only super admin can delete a company" })
    }
})

exports.createCompany = promise(async (req, res) => {
    const newCompany = new Company({
        ...req.body,
        manager: req.user._id
    })
    await newCompany.save()
    res.status(200).json({ message: "Successfully added a new company" })
})

exports.editCompanyUser = promise(async (req, res) => {
    const body = req.body
    await CompanyUser.updateOne(
        {
            userId: body.userId,
            companyId: body.companyId
        },
        {
            $set: {
                ...req.body
            }
        }
    )
    res.status(200).json({ message: "Successfully updated company user profile" })
})

exports.allCompanyUsers = promise(async (req, res) => {
    const companyUser = await CompanyUser.find({companyId: req.body.companyId})
    if (!companyUser) throw new Exceptions.NotFound("No company found")

    res.status(200).json({ companyUsers: companyUser })
})