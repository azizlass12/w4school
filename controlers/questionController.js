const Exam = require("../models/examModel");
const Question = require("../models/questionModel");


exports.addNewQuestion=async (req,res,next)=>{
  try {
    const exam = await Exam.findById(req.params.idExam)
    if(!exam){
        return res.status(400).json({
            status:"Failed",
          })
    }
    const question=await Question.create(req.body)
    if(question){
   await Exam.findByIdAndUpdate(exam.id,{
    $push : { Question:question.id,
      
    }
   })
  
   await Question.findByIdAndUpdate(question.id,{
    $push : { examID:exam.id}
   }) 
   return res.status(200).json({
    status:"Success",
    data:question
  })
    }
    return res.status(400).json({
        status:"Failed",
      })

}catch(err){
    return res.status(400).json({
      status:"Failed",
      data: err ,
  })
}}        