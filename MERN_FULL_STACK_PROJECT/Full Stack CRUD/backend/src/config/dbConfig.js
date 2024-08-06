const mongoose = require("mongoose");

//testing purpose
// const connectedToMongoDB = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/crud_db")
//     console.log("Connected successfully to database")
    
//   } catch (error) {
//     console.error(`connection error to database {error}`  )
    
//   }
// }

mongoose.connect("mongodb://localhost:27017/crud_db", {
})
  mongoose.connection.on("connected", () => {
    console.log("DataBase Connection Done !!!!")
  })
  mongoose.connection.on("error", (err) => {
    console.log(`DataBase Connection failed !!!! ${err}`)
  })

module.exports = mongoose;