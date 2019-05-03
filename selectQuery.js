const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/CRUD-DB')
.then(()=>console.log("connected to Mongdb"))
.catch(err=>console.error("Ooops... connection error",err));


const collections=mongoose.model('courses',{});

collections.find({ author:'channu'})
   .select('author name tags ')
   .sort('name')
   .exec(function(err,data){
       if(err) return err;
       console.log(data);
   });
       


   