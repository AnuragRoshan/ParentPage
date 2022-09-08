// import mongoose  from "mongoose";
const mongoose = require("mongoose")

const userSchema=mongoose.Schema({

    name:{
        type:String,
    },
    
    email:{
        type:String,
    },
    
    suggestions:{
        type:Array,
    }
})

const SuggestionForm=mongoose.model('SuggestionForm',userSchema)

// export default user;
module.exports=SuggestionForm;