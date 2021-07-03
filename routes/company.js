const express = require("express")
const router = express.Router()
const company = require("../controllers/company")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const { addUserSchema } = require("../validation/company")

router.post("/add-user", authentication, validation(addUserSchema), company.addCompanyUser)
router.post("/edit", authentication, company.editCompany)

module.exports = router