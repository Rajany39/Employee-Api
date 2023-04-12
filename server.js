const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
require('dotenv').config()
const employe = require('./route/employeroute')

const app = express()

app.use(express.json())
// app.get("/",(req,res)=>{
//     res.send("hello world")
// })




app.use('/api/v1/employee',employe)

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('database is connected...'))
.catch((err)=>console.log(err))

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is connected ${PORT}`)
})