import express from 'express';
import { connectDB } from './config/db.js';





const app = express()

app.get('/fabnest',(req,res)=>{
    
})


console.log(process.env.MONGO_URL)

app.listen(5000,()=>{
  connectDB();
    console.log("Server Started at http://localhost:500");
});
