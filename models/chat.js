const mongoose=require("mongoose");
let chatSchema=mongoose.Schema({
    from:{
        type:String,
        require:true
    },
    to:{
        type:String,
        require:true
    },
    msg:{
        type:String
    },
    created_at:{
        type:Date,
        require:true
    }

})

let chat=mongoose.model("chat",chatSchema);

module.exports=chat;