const mongoose = require("mongoose");
const ExamSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required:[true]
  },
 
  Question: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"question",
      required:[true]

    }
    
    
   
    
  ],
 
 
});
const exam = mongoose.model("exam", ExamSchema);
module.exports = exam;
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const optionSchema = new Schema({
//   option: {
//     type: String,
//     required: true
//   }
// });

// const questionSchema = new Schema({
//     question: {
//         type: String,
//         required: true
//     },
//     answers: [optionSchema],

//     answer: {
//       type: Number,
//       required: true
//     },

//     isEnabled: {
//         type: Boolean,
//         default: true
//     },

//     explanation:{
//       type: String,
//       default: ""
//     }

// }, {
//     timestamps: true
// });
// const examSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true,
//     },

//     instructions: {
//         type: String,
//         required: true
//     },

//     isEnabled: {
//         type: Boolean,
//         default: true
//     },

//     questions: [questionSchema],

//     duration :{
//       hours : {
//         type : Number,
//         default: 0
//       },

//       minutes : {
//         type : Number,
//         default: 0
//       },

//       seconds : {
//         type : Number,
//         default: 0
//       }

//     }
// }, {
//     timestamps: true
// });

// var exames = mongoose.model('exam', examSchema);

// module.exports = exames;
// subjects: [
//   {
//     name: Phisique,
//     questions: [
//       {
//         question: puissance,
//         answer1: W ,
//         answer2: W ,
//         answer3: W ,
//         answer4: W ,
//         correctAnswer: W
//       },
//       {
//         question: Poids ,
//         answer1: P = g / m ,
//         answer2: P = m / g,
//         answer3: P = m * g *2,
//         answer4: P = g *m,
//         correctAnswer: P = g *m
//       }
//     ],
//   }Z
//   module.exports = Exam = mongoose.model('exam',ExamSchema)
