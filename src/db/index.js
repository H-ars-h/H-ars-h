const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const userRouter = require('../routers/user')

const app = express()
const port = process.env.PORT || 3000


app.use(morgan('dev'));
app.use(express.json())
app.use(userRouter)

mongoose.connect('mongodb://127.0.0.1:27017/task_01',{
useNewUrlParser: true,
useUnifiedTopology: true
})



app.listen (port, () => {
    console.log('Server is up on port ' + port)
})