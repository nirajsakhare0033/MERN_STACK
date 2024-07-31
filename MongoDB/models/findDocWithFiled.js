import mongoose from "mongoose";

//default schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  rating: { type: Number, required: true, min: 1, max: 10 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    vaildate: (v) => (v) => 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

//creating models
const movieModel = mongoose.model("Movie", movieSchema);
const findDocwithField = async () => {
  try {
    const result = await movieModel.find().sort({name:1});
    console.clear();
    console.log(result);
    console.clear();
    
    
  } catch (error) {
    console.log(error);
  }
};
export { findDocwithField };
