const express = require("express")
const router = express.Router()
const company = require("../controllers/company")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const { addUserSchema, deleteCompanySchema, getUserCompanySchema } = require("../validation/company")

router.post("/add-user", authentication, validation(addUserSchema), company.addCompanyUser)
router.post("/edit", authentication, company.editCompany)
router.get("/all", authentication, company.allCompanies)
router.post("/all-user-companies", authentication, validation(getUserCompanySchema), company.allUserCompanies)
router.post("/delete", authentication, validation(deleteCompanySchema), company.deleteCompany)

module.exports = router