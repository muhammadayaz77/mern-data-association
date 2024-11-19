import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.mjs';
dotenv.config();
let app = express();
connectDB();
app.get('/ping',(req,res) =>{
  res.send("pong")
})

app.listen(3000,() => {
  console.log('http://localhost:3000');
})