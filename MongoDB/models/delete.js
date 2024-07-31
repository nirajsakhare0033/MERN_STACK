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
const deleteQuery = async () => {
  try {
    //updateOne(filter, whatToChange?)

    const result = await movieModel.findByIdAndDelete(
      "66a9c9a5e6f7e0df36c9ba59"
    );
    //deleteOne({name:"Extraction 4"})
    //deleteMany({rating:7.5})

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export { deleteQuery };
