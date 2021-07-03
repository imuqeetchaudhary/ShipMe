const { Company, CompanyUser } = require("../db/models/company")
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