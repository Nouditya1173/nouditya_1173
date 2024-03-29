import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
    name : {
        type : String
    },
    description  : {
        type : String
    }
    ,videos : {
        type : mongoose.Schema.Types.ObjectId,
         ref : "Video"
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
},{timestamps:true})


export const playlist = mongoose.model("playlist",playlistSchema)