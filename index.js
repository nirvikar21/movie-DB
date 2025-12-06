import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port=5000
app.get('/',(req,res)=>{
    res.send("App Started Successfully")
})
app.get('/home',(req,res)=>{
    res.send("App Started Successfully")
})

app.listen(process.env.PORT,()=>{
    console.log(`App is running on the ${process.env.PORT}`)
})
