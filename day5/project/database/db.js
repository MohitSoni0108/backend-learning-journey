const mongoose = require("mongoose");// 1. IMPORT MONGOOSE (The Translator)
   

//2. CREATE THE CONNECTION FUNCTION
const connectToDB = async()=>{

    try{
      await mongoose.connect(process.env.MONGO_URI);
     console.log("MongoDB is connected successfully!");
     }
     catch(error)
     {
        console.error("MongoDB connection failed", error);
        process.exit(1);
     }

}     

module.exports = connectToDB; // 3. EXPORT THE FUNCTION




   
