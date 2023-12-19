const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token =req.headers['token']
   if (!token) {
   return  res.status(401).json({ message: "access denied.No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.access_token_secret);
    req.user = decoded
    next()
  } catch (error) {
    console.log("this is an invalid access token :(", error.response);
    res.status(400).json({ message: "invalid token"});
  }
}


module.exports=auth 