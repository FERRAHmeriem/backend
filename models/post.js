const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types
const PostModel = new mongoose.Schema({
    date : {
        type : String,
        required : [true , "please provide a date"],
        unique : false
    },
    place : {
        type : String,
        required : [true , "please provide the place"],
        unique : false
    },
    location : {
        type : String,
        required : [true , "please provide a location for your event"],
        unique : false
    },
    organizer : {
        type: ObjectId,
        ref :'User'
    },
    category :{
        type : String,
        required : [true , "please provide the category of this post"],
    },
    title : {
        type : String,
        required : [true , "please provide a date"],
        unique : false
    },
    isApprouved : {
        type : String,
        default :""
    },
    likes : {
        type : Number,
        default :0
    },
    price : {
        type : Number,
        default :0
    },
    
    link : {
        type : String,
        required : [true , "this link will redirect you to the form "],
    },
    sold :{
        type:Boolean,
        default : false
    },
    feedbacks: [{
        username : String,
        message:String
    }],
    interested : [{
        type : ObjectId,
        ref:'User'
    }]

})



module.exports = mongoose.model("Post" , PostModel )