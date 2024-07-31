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

const createDoc = async () => {
  try {
    //creating new documnents
   const quary1 =  new movieModel({
      name:"Extraction 3",
      rating:8,
      money:102029,
      genre:["action", "si-fi"],
      isActive: true,
      comments: [{value:"that was a amazing movie"}]

    })
    const result = await quary1.save()
    console.log(result)

  } catch (error) {
    console.log(error)
  }
}

export { createDoc };
