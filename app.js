const bodyParser = require ('body-parser')

const express = require ('express')

const cors = require('cors')
const examRoute =require('./routes/examRoute')

const answerRoute =require('./routes/answerRoute')

const questionRoute =require('./routes/questionRoute')


app = express () ;

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json());
app.use(cors())

app.use('/exam',examRoute)
app.use('/question',questionRoute)
app.use('/answer',answerRoute)

module.exports=app ; 