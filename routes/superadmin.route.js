const express = require("express")
const {registerSuperAdmin, authenticateSuperAdmin} = require("../controllers/superadmin.controller");
router.post("/signupsuperadmin", registerSuperAdmin)
router.post("/loginsuperadmin", authenticateSuperAdmin)
const router = express.Router()
module.exports = router;