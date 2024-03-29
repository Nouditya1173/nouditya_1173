import mongoose from "mongoose";

const likesSchema = new mongoose.Schema({
   comment : {
     type : mongoose.Schema.Types.ObjectId,
     ref : "comments"
   },
   tweet : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "tweets"
   },
   video : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Video"
   },
   likedBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
   }
},{timestamps:true})

export const likes = mongoose.model("lokes",likesSchema)