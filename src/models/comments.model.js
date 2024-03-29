import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
       content:{
        type: String
       },
       video : {
         type : mongoose.Schema.Types.ObjectId,
         ref : "Video"
       },
       owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
},{timestamps:true})

export const comments = mongoose.model("comments",commentsSchema)