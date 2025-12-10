import mongoose from "mongoose";
import dotenv from 'dotenv';
import { DB_NAME } from "../constant.js";
<<<<<<< HEAD
=======
//console.log("=======",process.env.MONGO_URI);
>>>>>>> b823f4bf17c62bd47ff9a05d080493372531dcc8
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