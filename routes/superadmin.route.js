const express = require("express")
const {registerSuperAdmin, authenticateSuperAdmin} = require("../controllers/superadmin.controller");
const router = express.Router()
router.post("/signup", registerSuperAdmin)
router.post("/login", authenticateSuperAdmin)
module.exports = router;