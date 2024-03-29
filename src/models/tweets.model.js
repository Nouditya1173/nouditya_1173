import mongoose from "mongoose";

const tweetsSchema = new mongoose.Schema(
    {
        owner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        content :
        {
            type : String,
            default : "123"
        }


},{timestamps:true})


export const tweets = mongoose.model("tweets",tweetsSchema)