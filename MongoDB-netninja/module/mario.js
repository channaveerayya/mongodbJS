const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//create Schema and model
const MarioSchema=new Schema({
    name:String,
    weight:Number
});
const MarioChar=mongoose.model('mariochar',MarioSchema);
module.exports=MarioChar;