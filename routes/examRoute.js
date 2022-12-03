const express = require('express');
const router = express.Router();
const examController = require('../controlers/examController')

router.post('/addExam',examController.addNewExam);
router.get('/getAll',examController.getAll);
// router.delete('/:id',examController.deleteExam);
// router.put('/:id',examController.updateExam)

module.exports = router