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
  await user.save();
  res.send(user);
});
app.get('/post',async(req,res) =>{
 let post =  await postModel({
    postdata : 'Hello World',
    user : "673ca8baf44addb3ac76709f",
    email : 'ayaz@gmail.com'
  })
  let user = await userModel.findOne({_id : '673ca8baf44addb3ac76709f'});
  user.posts.push(post._id);
  await user.save();
  res.send({post,user});
});

app.listen(3000,() => {
  console.log('http://localhost:3000');
})