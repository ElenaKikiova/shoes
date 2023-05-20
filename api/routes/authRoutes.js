const jwt = require("jsonwebtoken");
const express = require("express");
const UserModel = require("../schemas/userSchema");

const router = express.Router();
 
router.route("/login").post(async (req, res) => {
  try {
    console.log(req.body);
    const user = await UserModel.findOne({ username: req.body.username, password: req.body.password });
    console.log(user);
    if(user){
      const token = generateToken(user.username);
      console.log(token);
      res.json({ data: { username: user.username, token: token }, status: "success" });
    }
    else {
      res.json({ status: "failed login" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const generateToken = (username) => {
  // Validate User Here
  // Then generate JWT Token

  let data = {
    time: Date(),
    username: username
  }
  const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
  return token;
};

// // Verification of JWT
// app.get("/user/validateToken", (req, res) => {
//   // Tokens are generally passed in header of request
//   // Due to security reasons.

//   let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
//   let jwtSecretKey = process.env.JWT_SECRET_KEY;

//   try {
//       const token = req.header(tokenHeaderKey);

//       const verified = jwt.verify(token, jwtSecretKey);
//       if(verified){
//           return res.send("Successfully Verified");
//       }else{
//           // Access Denied
//           return res.status(401).send(error);
//       }
//   } catch (error) {
//       // Access Denied
//       return res.status(401).send(error);
//   }
// });

module.exports = router;