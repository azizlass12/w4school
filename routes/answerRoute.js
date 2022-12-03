const express = require('express');
const router = express.Router();
const answerController = require('../controlers/answerController')

router.post('/addAnswer/:idQuestion',answerController.addNewAnswer);


module.exports = router