//require('dotenv').config({path: '/.env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({
    path : '/.env'
})
// change in to checxk git

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000 , ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongo DB connection Failed" ,err);
})



// nowsecond attempy
// third attempt

// Second Approach


/*

// First Approach

import express from "express";

const app = express();

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on("errror",(error)=>{
            console.log("ERRR:",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error",error)
        throw error
    }
})()*/