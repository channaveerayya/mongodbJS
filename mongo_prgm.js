const mongoose=require('mongoose');
//connection to MONGODB
mongoose.connect('mongodb://localhost/testing1');
mongoose.connection.once('open',()=>{
                            console.log("connection success");
                        }).on('err',(err)=>{
                            console.log("Ooops..!  connection fail",err);
                        });

var ModelSchema=mongoose.model('pet',{name:String,age:Number});

var rec=new ModelSchema({name:'channu',age:25});

rec.save(err=>{
    if(err){
        console.log("error in inserting rec",err);
             }
        else{
            console.log("yes..inserted ",rec);

        }
});