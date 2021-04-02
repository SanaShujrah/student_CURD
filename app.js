const express=require('express');
const bodyParser=require('body-parser');
const student=require('./routes/student.route');
const mongoose=require('mongoose');
const app=express();


//------------ mongoose connection----------------
mongoose.connect("mongodb://localhost/studentsDB", {useNewUrlParser: true, useUnifiedTopology: true } )
.then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });;

//------------ mongoose connection----------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



//http://localhost:3000/students/test
app.use('/students',student)

app.listen(3000,()=>
{
    console.log("you are in port 3000");
    
})