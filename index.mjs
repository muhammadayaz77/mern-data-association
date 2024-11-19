import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.mjs';
import userModel from './Models/userModel.mjs';
import postModel from './Models/postModel.mjs';
dotenv.config();
let app = express();
connectDB();
app.post('/ping',async(req,res) =>{
 let user =  await userModel({
    name : "ayaz",
    email : 'ayaz@gmail.com'
  })
  res.send(user);
});


app.listen(3000,() => {
  console.log('http://localhost:3000');
})