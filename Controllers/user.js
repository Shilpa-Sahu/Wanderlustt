

const User= require("../models/user.js");



module.exports.renderSignUpForm =  (req, res) =>{
	res.render("users/signUp.ejs");
 };

 module.exports.signUp = async(req, res) =>{
	try{
		let { username, email,password} = req.body;
	const newUser = new User({email, username});
	  const register = await User.register(newUser, password);
	  console.log(register);
	  req.login(register, (err) =>{
		if(err){
			return next(err);
		}
		req.flash("success", "Welcom to wanderlust");
	  res.redirect("/listings");
	  });
	  
   }catch(e){
	req.flash("error",e.message);
	res.redirect("/signUp");
   }
};

module.exports.renderloginForm = (req, res)=>{
	res.render("users/login.ejs");
};

module.exports.Login = async(req, res)=>{
       req.flash("success","Welcome back to wanderlust!");
	   let redirecturl = res.locals.redirectUrl || "/listings";
	   res.redirect(redirecturl);
};

module.exports.LogOut = (req, res, next)=>{
	req.logOut((err)=>{
		if(err){
			 return next(err);
		}
		req.flash("success","you are logOut !");
		res.redirect("/listings");
	});
};