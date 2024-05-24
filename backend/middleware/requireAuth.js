const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const requireAuth = async(req,res,next) =>{
    console.log("inside requireAuth");
    // 1. Read token off cookie
    const token = req.cookies.authorization;

    if (!token) {
        return res.status(401).send('Access Denied: No Token Provided!');
    }

    // 2. Decode Token  -> jwt
    const decoded = jwt.verify(token, process.env.SECRET);

    // 2a. Check if the token is expired
    if(Date.now() > decoded.exp) return res.sendStatus(401);
     // 3. Find user [decoded sub]
    const user = await User.findById(decoded.sub);
    if (!user) return res.sendStatus(401);
    // 4. Attach user to request
    req.userId = user;
    console.log(req.user, 'req.user');
    console.log(user, 'user');
    next();
};


module.exports = requireAuth;