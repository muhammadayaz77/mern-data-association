import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  name : String,
  email : {
    type : String,
    required : true,
    unique : true
  },
  age : Number,
  posts : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'post',
  }
  ]
})

let userModel = mongoose.model('user',userSchema);

export default userModel;