import jwt, { decode } from 'jsonwebtoken'
import User from '../models/User.js'
import asyncHanddler from './asyncHaddler.js'

//check if the user is authenticated or not

const authenticate = asyncHanddler(async(req, res, next) => {
  let token;
  //read jwt from the jwt cookies
  token = req.cookies.jwt

  if(token) {
    try {
      const decoded = jwt.verify(token, process.env.WT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password');
      
    } catch (error) {
      res.status(401)
      throw new Error("Not authorized, token failed.")
    }
  }
  else {
    res.status(401) 
    throw new Error("Not authorized, no token sorry")
  }
  console.log(asyncHanddler)
})

//check if the user is admin or not

const authorizedAdmin = (req, res, next) => {
  if(req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("Not authorized as an admin")
  }

}

export { authenticate, authorizedAdmin};
