const express=require("express");
const app=express();
const mongoose=require("mongoose");
const methodoverride=require("method-override");

app.use(methodoverride("_method"));
const path=require("path");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
main().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
async function main(){
   await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chat=require("./models/chat.js");
app.get("/chats",async(req,res)=>{
    let chats=await chat.find();
    res.render("chats.ejs",{chats});
})

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/chats",(req,res)=>{
    console.log(req.body);
    let {from,to,message,date}=req.body;
    chat.insertMany([{from:from,to:to,msg:message,created_at:date}]);
    res.redirect("/chats");
})

app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let c=await chat.findById(id);
    res.render("edit.ejs",{c});
})
app.patch("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {msg}=req.body;
    let c=await chat.findByIdAndUpdate(id,{msg:msg});
    res.redirect("/chats");

})
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    
    let c=await chat.findByIdAndDelete(id);
    
    res.redirect("/chats");
})
app.listen("8082",()=>{
    console.log("server is listening");
})