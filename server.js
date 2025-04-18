require('dotenv').config()
 const express = require('express');
 const connectToDb = require('./database/db')
 
 const app = express();
 const PORT = process.env.PORT || 3000;
 
 connectToDb();
 
 app.use(express.json());
 
 app.listen(PORT, ()=>{
     console.log(`Server is now running on port ${PORT}`);
     
 })