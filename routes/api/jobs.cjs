//coding in common JS
const express = require("express")
const router = express.Router()
const jobsCtrl = require("../../controllers/api/jobs.cjs")
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs")

router.get("/", jobsCtrl.getJob)

router.get("/check-token", ensureLoggedIn, jobsCtrl.checkToken)

// router.delete("/", jobsCtrl.deleteJob);

// router.put("/", jobsCtrl.update);


module.exports = router