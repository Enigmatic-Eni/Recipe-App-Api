const { log } = require('console');
const mongoose = require('mongoose');

const connectToDb = async()=>{
    try {
        await mongoose.connect("mongodb+srv://sannimotunrayo04:motun-recipe-app@cluster0.02iyp3g.mongodb.net/")
        console.log("MongoDB is connected successfully");
        
    } catch (error) {
        console.error("Mongodb connection failed", error);
        process.exit(1)
        
    }
};

module.exports = connectToDb;