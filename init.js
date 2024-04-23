const mongoose=require("mongoose");
main().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
async function main(){
   await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chat=require("./models/chat.js");
let c=[
    {
    from:"rani",
    to:"pooja",
    msg:"good afternoon",
    created_at:new Date()
},
    {
    from:"ram",
    to:"sita",
    msg:"happy birthday",
    created_at:new Date()
},
    {
    from:"sri",
    to:"vamshaj",
    msg:"how  are you?",
    created_at:new Date()
},
    {
    from:"ravi",
    to:"kumar",
    msg:"hello hi bye bye",
    created_at:new Date()
},
    {
    from:"momo",
    to:"siri",
    msg:"have a great day",
    created_at:new Date()
}

]
chat.insertMany(c);