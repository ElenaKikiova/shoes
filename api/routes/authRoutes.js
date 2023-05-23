const jwt = require("jsonwebtoken");
const express = require("express");
const UserModel = require("../schemas/userSchema");

const router = express.Router();
 
router.route("/auth/login").post(async (req, res) => {
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

router.use('/', (req, res, next) => {
  console.log('middleware', req.headers);
  next();
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

const generateToken = (username) => {
  let data = {
    time: Date(),
    username: username
  }
  const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
  return token;
};

// Verification of JWT
const validateToken = (token) => {

  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
      const verified = jwt.verify(token, jwtSecretKey);
      return verified;
  } catch (error) {
      return res.status(401).send(error);
  }
};

module.exports = router;