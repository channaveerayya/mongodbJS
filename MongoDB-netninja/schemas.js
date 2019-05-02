const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/TestDB')
.then(()=>console.log("connected to Mongdb"))
.catch(err=>console.error("Ooops... connection error",err));

//schema creation
const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean
});
//here Course is class
const Course=mongoose.model('TEST',courseSchema);

async function createCourse(){
    //here coursedata is object
    const coursedata=new Course({
        name:'react.js',
        author:'Abi',
        tags:['react','front'],
        isPublished:true});
    const result=await coursedata.save();
    console.log(result); 
}
createCourse();