import mongoose from "mongoose";
import dotenv from 'dotenv';
import { DB_NAME } from "../constant.js";
const connectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n MONGODB Connected Successfully`);
    }catch(err){
        console.log("MONGODB connection Failed",err)
        process.exit(1)
    }
}
export default connectDB;