const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema({
  Question:{
    type:String,
    required:[true]

  },
  
 answers:[
  {
    type:mongoose.Schema.ObjectId,
    ref:"answer",
  },
 ],
  examID:{
    type:mongoose.Schema.ObjectId,
    ref:"exam"
  }
});
const question = mongoose.model("question", questionSchema);
module.exports = question;