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

const insertmanyDoc = async () => {
  try {
  //   //creating new documnents
  //   const quary1 = new movieModel({
  //     name: "Extraction 3",
  //     rating: 8,
  //     money: 102029,
  //     genre: ["action", "si-fi"],
  //     isActive: true,
  //     comments: [{ value: "that was a amazing movie" }],
  //   });
  //   const result = await quary1.save();
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }

  // //creating 2nd quary
  // try {
  //   //creating new documnents
  //   const quary1 = new movieModel({
  //     name: "golmaal 4",
  //     rating: 7.5,
  //     money: 200000,
  //     genre: ["comedy", "drama", "romance"],
  //     isActive: true,
  //     comments: [{ value: "This is family drama movie" }],
  //   });
  //   const result = await quary1.save();
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }

  // //creating 2nd quary
  // try {
  //   //creating new documnents
  //   const quary1 = new movieModel({
  //     name: "game of thrones",
  //     rating: 7.5,
  //     money: 200000,
  //     genre: ["comedy", "drama", "romance"],
  //     isActive: true,
  //     comments: [{ value: "This is family drama movie" }],
  //   });


  //   const result = await quary1.save();
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }


  const result = await movieModel.find(); //getting all data from database
  //console.log(result)

  //iterating over ther documents
  result.forEach((movie)=>{
    console.log(movie.name)
    console.log(movie.genre)
    
  })
  


  }
  catch (error){
    console.log(error)
  }

}



   
  


export {  insertmanyDoc };
