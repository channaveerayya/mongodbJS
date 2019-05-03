const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/CRUD-DB')
.then(()=>console.log("connected to Mongdb"))
.catch(err=>console.error("Ooops... connection error",err));


const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean
});

//here class is CourseClass
const CourseClass=mongoose.model('Course',courseSchema);
//here object is courseObj
async function createCourse(){
    const courseObj=new CourseClass({
        name:'c++',
        author:'apek',
        tags:['java','backend'],
        isPublished:true
    });  
    const result=await courseObj.save();
    //console.log(result);

}
createCourse();

//query for view 
async function getCourse(){
    const courseObj=await CourseClass
    .find({author:'abhi',isPublished:true})
    .limit(10)
    .sort({name:1})
    .select({name:1,tags:1});
    console.log(courseObj);
}
getCourse();

//  comparison  operations 
// eq (equal)
// ne (not equal)
// gt (greater then)
// gte (greater then or equal)
// lt (less then)
// lte (ess then equal)
// in 
// nin (not nin )

//getting price of course more then $10 
//.find({price:{$gt:10}}) 

//getting price of course between $10 and $20
//.find({price:{$gt:10,$lte:20}}) 

//either $10 or $15 or $20
//.find({price:{$in:[10,15,20]}}) 




//logical operations
 //.or([{author:'channu',isPublished:true }])
 //.or([{author:'channu',isPublished:true }])


//regular expression

        //stat with channu
            //.find({author:/^channu/})
        //end with channu
            //.find({author:/channu$/i})
        //contains channu
            //.find({author:/.*channu.*/i})


// counting
async function getCourseCount(){
    const courseObj=await CourseClass
    .find({author:'abhi',isPublished:true})
    .limit(10)
    .sort({name:1})
    .count();
    console.log(courseObj);
}
getCourseCount();

//pagination
// counting
async function pagination(){
    const pageNo=2;
    const pageSize=10;
    const courseObj=await CourseClass
    .find({author:'channu',isPublished:true})
    .skip((pageNo-1)*pageSize)
    .limit(pageSize)
    .sort({name:1});
    console.log(courseObj);
}
pagination();


//updating query 

async function updateQueryFirst(id){
    //Query First
    //findById()
    //Modify its properties
    //save()
    const courseObj=await CourseClass.findById(id);
    if(!courseObj)
        return;
    
    courseObj.isPublished=true;
    courseObj.author='updated author';
        
        // or 

        // courseObj.set({
        //    isPublished:true,
        //    author:'updated author'
        // });
    courseObj.save();   
}
updateQueryFirst('5cca96e5d94a6731d88eae31');



async function UpdateDirect(id){
    //Update Fisrt
    // Update Directly
    //Optionally :get the updated document
    const courseObj=await CourseClass.update({_id:id},{
        $set:{
            author :'shree',
            isPublished:true
        }
    });
console.log(courseObj);
}   
UpdateDirect('5cca96e5d94a6731d88eae31');
    

//removing document in mongodb


async function RemoveQuery(id){
    const result= CourseClass.deleteOne({_id:id});
    console.log(result);
}

RemoveQuery('5cca96e5d94a6731d88eae31');