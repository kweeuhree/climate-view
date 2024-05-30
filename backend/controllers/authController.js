const User = require('../models/UserModel');

//auth
// require bcrypt for hashing
const bcrypt = require("bcryptjs");
// require jwt for generating a token
const jwt = require("jsonwebtoken");

// sign up function
const signup = async (req, res) => {
  try {
        // 1. Get Email and Password - [req.body]
        const { name, email, password } = req.body;
        // ** Hash Password **
        const hashedPassword = bcrypt.hashSync(password, 8)
      
        // 2.Create User
        const newUser = await User.create({
          name,
          email,
          password: hashedPassword,
        });
        console.log("User Created", newUser);
        // Send Response
        res.json(newUser);
  } catch (error) {
    console.log(`Error inside signup: ${error}`);
    res.status(500);
  }
  };
  
  // log in function
  const login = async (req, res) => {
    try {
      // 1. Get email and password -[req.body]
      const { email, password } = req.body;
      // 2. Find User with requested email
      const user = await User.findOne({ email });
      console.log(`User: ${user}`);
      if (!user) return res.sendStatus(401);
      // 3. Compare password with foundUser
      const passwordMatch = await bcrypt.compareSync(password, user.password);
      console.log("Password Verified");

      // if passwords dont match, send back a 401 status

      if (!passwordMatch) return res.sendStatus(401);
      
      // 4. Create JWT
      const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
      console.log(exp);
      // ----milisec: ---> 2sec- imin-1day-30days
      // setting an expiration date for token(ie:30days)
      const token = jwt.sign({ sub: user._id, exp, user: user}, process.env.SECRET);
      console.log("Token: ", token);
  
      // -----Cookie
      res.cookie("Authorization", token, {
        expires: new Date(exp),
        //   sets expiration
        httpOnly: true,
        // allows only browser and server to read
        sameSite: "lax"
      });

      // Cookie - data that our servers will send to browser and store in cache.
      // Cookies save information about a user's session
      // by default express doesnt read cookies off request body so u need an npm package :cookie-parser
  
      // 5. Send Response
      res.json({user});

    } catch (error) {
      console.log(error);
    }
  };

  // logout function
  const logout = (req, res, next) => {

    //clear user sesstion
      res.clearCookie("authorization");
      res.sendStatus(200);
      console.log(`Successfully Logged Out`);
      next();
  };
  
  const checkAuth = (req,res) => {
      console.log(req.user);
      res.sendStatus(200);
  };
  

  // export
  module.exports = {
    signup,
    login,
    logout,
    checkAuth
  };


