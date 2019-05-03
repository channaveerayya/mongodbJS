const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://channu:channu@cluster0-zd02o.mongodb.net/test?retryWrites=true')
.then(()=>console.log("connected to Mongdb"))
.catch(err=>console.error("Ooops... connection error",err));


