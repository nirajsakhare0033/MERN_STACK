const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required."],
      minlength: [3, "First Name should of minimum 3 characters."],
      maxlength: [12, "First Name can be of maximum 12 characters only."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
  },
  { timestamps: true }
);

userSchema.statics.register = async function (firstName, email, password) {
  if (!firstName || !email || !password) {
    throw Error("All fields must be provided.");
  }

  if (firstName.length < 3) {
    throw Error("First name should be of at least 3 characters.");
  }

  if (!validator.isEmail(email)) {
    throw Error("Please enter a valid email address.");
  }

  if (!validator.isStrongPassword) {
    throw Error("Please provide a strong password.");
  }

  const account = await this.findOne({ email });

  if (account) {
    throw Error("Email already registered.");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ firstName, email, password: hash });
  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be provided.");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("This email is not registered.");
  }

  const comparedPassword = await bcrypt.compare(password, user.password);

  if (!comparedPassword) {
    throw Error("Incorrect password.");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
