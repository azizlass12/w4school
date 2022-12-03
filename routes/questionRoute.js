const express = require('express');
const router = express.Router();
const questionController = require('../controlers/questionController')

router.post('/addQuestion/:idExam',questionController.addNewQuestion);


module.exports = router