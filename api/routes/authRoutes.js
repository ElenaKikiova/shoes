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
      res.json({ error: "Failed login", status: 401 });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.use('/', (req, res, next) => {
  let token = req.headers.authorization;
  if(token){
    token = token.replace("Bearer ", "");
    const isTokenValid = validateToken(token);
    if(isTokenValid){
      next();
    }
    else {
      console.log('invalid token')
      res.status(401).json({ error: 'Invalid token', status: 401})
    }
  }
  else {
    console.log('no token')
    res.status(401).json({ error: 'Not logged in', status: 401})
  }
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

  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
      const verified = jwt.verify(token, jwtSecretKey);
      return verified;
  } catch (error) {
     return false;
  }
};

module.exports = router;