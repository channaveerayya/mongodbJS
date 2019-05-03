const mongoose=require('mongoose');
//connection to MONGODB
mongoose.connect('mongodb://localhost/testing');
mongoose.connection.once('open',()=>{
                            console.log("connection success");
                        }).on('err',(err)=>{
                            console.log("Ooops..!  connection fail",err);
                        });
                        //asdfghjkl