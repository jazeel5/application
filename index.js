const connectToMongo = require('./db');
const express = require('express')
const StudentRouter = require('./routes/crud')
const TeacherRouter = require('./routes/teacher_route')
const cors = require('cors')

connectToMongo();


const app = express()
const port = 5001

app.use(express.json());

app.use(cors())


app.use('/api/student',StudentRouter)

app.use('/api/teacher',TeacherRouter)

// console.log(process.env)

// if(process.env.NODE_ENV=='production'){
  const path = require('path')

  app.get('*',(req,res)=>{
    app.use(express.static(path.resolve(__dirname,'frontend','build')))
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
  })
// }


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

