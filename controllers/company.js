const { Company, CompanyUser } = require("../db/models/company")
const { User } = require("../db/models/user")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")

exports.addCompanyUser = promise(async (req, res) => {
    const body = req.body
    const newCompanyUser = new CompanyUser({
        ...body
    })
    await newCompanyUser.save()
    res.status(200).json({ message: "Successfully saved new company user" })
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