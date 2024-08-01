import  {User}  from "../models/User.js";
import bcrypt from "bcryptjs";
import asyncHanddler from "../milddlewares/asyncHaddler.js";
import createToken from "../utils/createToken.js";

const createUser = asyncHanddler(async (req, res) => {
  const { username, email, password } = req.body;
  // console.log(username)
  // console.log(email);
  // console.log(password);
  if (!username || !email || !password) {
    throw new Error("Please fill all the fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) res.status(400).send("User already existet");

  //Hash the user Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    createToken(res, newUser._id);

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      
    });
    
  } catch (Error) {
    res.status(500);
    throw new Error(console.log(newUser));
    console.log(newUser);
  }
});

export { createUser };




