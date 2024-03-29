import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        //console.log(connectionInstance);
        console.log(`\n MongoDb connected !! DB : Host ${connectionInstance}`);
    } catch (error) {
        console.log("Mongo DB error",error);
        process.exit(1)
    }
}
export default connectDB