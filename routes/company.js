const express = require("express")
const router = express.Router()
const company = require("../controllers/company")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const {
    addUserSchema,
    deleteCompanySchema,
    getUserCompanySchema,
    createCompanySchema,
    allCompanyUsersSchema,
    editCompanyUserSchema } = require("../validation/company")

router.post("/add-user", authentication, validation(addUserSchema), company.addCompanyUser)
router.post("/edit", authentication, company.editCompany)
router.get("/all", authentication, company.allCompanies)
router.post("/all-user-companies", authentication, validation(getUserCompanySchema), company.allUserCompanies)
router.post("/delete", authentication, validation(deleteCompanySchema), company.deleteCompany)
router.post("/add", authentication, validation(createCompanySchema), company.createCompany)
router.post("/all-company-users", authentication, validation(allCompanyUsersSchema), company.allCompanyUsers)
router.post("/edit-company-user", authentication, validation(editCompanyUserSchema), company.editCompanyUser)


module.exports = router