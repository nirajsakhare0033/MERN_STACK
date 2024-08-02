import User from "../models/User.js";
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

  if (userExists){ res.status(400).send("User already existet");}

  //Hash the user Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save()
    createToken(res, newUser._id)

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invaild user data");
    //console.log(newUser);
  }
});

const loginUser = asyncHanddler(async (req, res) => {
  const { email, password } = req.body;
  // console.log(email);
  // console.log(password);
  const existingUser = await User.findOne({ email });
  //console.log(existingUser);

  if (existingUser) {
    const isPasswordVaild = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (isPasswordVaild) {
      createToken(res, existingUser._id);

      res.status(201).json({
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
      });
    } else {
      res.status(401).json({ message: "Invaild password" });
    }
  }
  else {
    res.status(401).json({message: "User not found"})
  }
});

const logoutCurrentUser = asyncHanddler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  })
  res.status(200).json({message: 'Logged out successfully'})
})


export { createUser, loginUser, logoutCurrentUser };


