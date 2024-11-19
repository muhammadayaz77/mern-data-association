import mongoose from "mongoose";

let postSchema = new mongoose.Schema({
  postdata : String,
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user'
  },
  data : {
    type : Date,
    default : Date.now,
  } 
})

let postModel = mongoose.model('post',postSchema);

export default postModel;