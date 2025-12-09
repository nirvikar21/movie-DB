import {ApiResponse} from "../utils/ApiResponse.js"
const welcome = (res,req)=>{
    console.log("test")
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )
}

export {
   welcome 
}