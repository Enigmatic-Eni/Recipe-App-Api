require("dotenv").config()
 const mongoose = require('mongoose');
 
 const connectToDb = async()=>{
     try {
         await mongoose.connect(process.env.MongoDb_URL)
         console.log("MongoDB is connected successfully");
         
     } catch (error) {
         console.error("Mongodb connection failed", error);
         process.exit(1)
         
     }
 };
 
 module.exports = connectToDb;