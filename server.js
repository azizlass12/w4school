const mongoose = require("mongoose")

const app= require("./app")

const DB = "mongodb://localhost:27017/Exameeen"

mongoose.connect(DB).then(()=>{
    console.log("DB Connect successfully !")
})


const port = 4002 ;

const server=app.listen(port,() =>{
    console.log("server running !! ")
})
