const Exam = require("../models/examModel");
const Question = require("../models/questionModel");
const Answer = require("../models/answerModel");


exports.addNewAnswer=async (req,res,next)=>{
    try {
      const question = await Question.findById(req.params.idQuestion)
      if(!question){
          return res.status(400).json({
              status:"Failed",
            })
      }
      const ans=await Answer.create(req.body)
      if(ans)
      {
     await Question.findByIdAndUpdate(question.id,{
      $push : { answers:ans.id}
     })
   
     await Answer.findByIdAndUpdate(ans.id,{
      $push : { QuestionID:question.id}
     })
    if(ans.answer===question.correctAnswer){
      ans.correctAnswer=true,
      ans.save()
    }
    return res.status(200).json({
      status:"Success answer",
      data:ans
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