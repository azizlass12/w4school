const Exam = require("../models/examModel");
const Question = require("../models/questionModel");
const Answer = require("../models/answerModel");
const question = require("../models/questionModel");
const answerModel = require("../models/answerModel");


exports.addNewExam=async (req,res,next)=>{
  try {
    const exam= await Exam.create(req.body)
    if(exam){
        return res.status(200).json({
          status:"Success",
          data: exam ,
        })
      }
      return res.status(400).json({
        status:"Failed",
    })
  } catch(err){
    return res.status(400).json({
      status:"Failed",
        data: err ,
  })
}
}


exports.getAll=async (req,res,next)=>{
  try {
    const exam= await Exam.find().populate({
      path:"Question",
      populate:{
        path:"answers",
        Model:"Answer"
      }
    })
    if(exam){
        return res.status(200).json({
          status:"Success",
          data: exam ,
          
        })
      }
      return res.status(400).json({
        status:"Failed",
    })
  } catch(err){
    return res.status(400).json({
      status:"Failed",
      data: err ,
  })
}
}

// exports.getAllExams=async (req,res,next)=> {
//   (req, res) => {
//    Exam.find()
//      .then((Exam) => res.status(200).json(Exam))
//      .catch((err) => {
//        res.status(500).json(err);
//      });
//  }
// }
//   addExam: (req, res) => {
//     const { subjectName, Question, A, B, C, D,correctAnswer} = req.body;
//     const newExam = new Exam({
//       subjectName: subjectName,
//       Question: Question,
//       A: A,
//       B: B,
//       C: C,
//       D: D,
//       correctAnswer: correctAnswer,
    
//     });
//     newExam.save().then((Exam) => res.json(Exam));
//   },
//   deleteExam: (req, res) => {
//     Exam.findById(req.params.id)
//       .then((Exam) => Exam.remove().then(() => res.json({ success: true })))
//       .catch((err) => res.status(404).json({ success: false }));
//   },
//   updateExam: (req, res) => {
//     Exam.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true },
//       (err, Exam) => {
//         if (err) return res.status(500).send(err);
//         return res.send(Exam);
//       }
//     );
//   },
// };
// // find mongoose
