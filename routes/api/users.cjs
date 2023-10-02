//coding in common JS
const express = require("express")
const router = express.Router()
const usersCtrl = require("../../controllers/api/users.cjs")
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs")


router.post("/", usersCtrl.create)

router.put('/dashboard', usersCtrl.createJob)

// /api/users/login
router.post("/login", usersCtrl.login)

router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken)

router.delete("/", usersCtrl.deleteUser);

router.put("/", usersCtrl.update);


module.exports = router