const mongoose=require('mongoose');
const express = require('express');

mongoose.connect('mongodb://localhost/login')
.then(()=>console.log("connected to Mongdb"))
.catch(err=>console.error("Ooops... connection error",err));
var app=express();

var LogDetails = mongoose.model('Log_details',{uname : String, password : String, age : Number, mob : Number});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
app.post('/login', (req,res)=>{
    LogDetails.find({uname: 'channu', password : 'a'}, (err,LogDetails) => {
      if(err){
        return console.log(err);
      }
      else if(!LogDetails){
        console.log('User not found');
      }
      else{
          console.log("success..");
          res.end("found");
      }
    });
});
