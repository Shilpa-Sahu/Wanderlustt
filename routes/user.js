const express = require("express");
const router = express.Router();
const  User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../Controllers/user.js");


router.route("/signUp")
.get( userController.renderSignUpForm)
.post(userController.signUp );

router.route("/login")
.get( userController.renderloginForm)
.post(
	saveRedirectUrl,
	 passport.authenticate('local',{ failureRedirect:"/login",
		failureFlash:true,
	 }),
	 userController.Login
	);

router.get("/logout",userController.LogOut);



module.exports = router;