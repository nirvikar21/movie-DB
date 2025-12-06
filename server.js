// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import User from './model/User.js';

// dotenv.config();

// const app = express();
// app.use(express.json());
// connectDB();

// app.post('/users',async(req,res)=>{
//     try{
//         const user =await User.create(req.body);
//         res.status(201).json(user);

//     }catch(err){
//        res.status(500).join({
//          error:err.message
//        })    
//     }
// })

// const PORT = process.env.PORT || 5003;
// app.listen(PORT,()=>{
//     console.log(`server is Running on port ${PORT}`)
// })