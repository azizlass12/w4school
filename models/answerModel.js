const mongoose = require("mongoose");
const answerSchema = new mongoose.Schema({
  A: {
    type: String,
  },
  B: {
    type: String,
  },
  C: {
    type: String,
  },
  D: {
    type: String,
  },
  correctAnswer: {
    type: String,

  },

  QuestionID:{
type:mongoose.Schema.ObjectId,
ref:"question"
},
 
  
  
});
module.exports = answer = mongoose.model('answer',answerSchema)