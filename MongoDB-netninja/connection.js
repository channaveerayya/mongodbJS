const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/TestDB')
.then(()=>console.log("connected to Mongdb"))
.catch(err=>console.error("Ooops... connection error",err));


//mmm