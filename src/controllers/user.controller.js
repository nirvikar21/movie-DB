import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "./../utils/ApiError.js"
import {User} from '../models/user.model.js'
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"

const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}


const registerUser = asyncHandler(async(req, res) => {
    const {username,email,fullname,password}=req.body
    console.log(req.body)
    if(
        [username,email,fullname,password].some((field)=>field?.trim()==="")
    ){
        throw new ApiError(401,"All fields are required")
    } 

    //check if user exist
    const userExist = await User.findOne({
        $or:[{username,email}]
    })
    if(userExist){
        throw new ApiError(409,"User already exist")
    }
    
    //upload Avatar image
    const avatarLocalPath = req.files?.avatar[0]?.path; 
    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    if(!avatar){
        throw new ApiError(400,"Avatar file is required")
    }

    const user = await User.create({
        fullname,
        avatar:avatar.url,
        email,
        password,
        username:username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )
});

const loginUser = asyncHandler(async(req,res) => {
    const {username,password} = req.body;
<<<<<<< HEAD
    
=======
>>>>>>> b823f4bf17c62bd47ff9a05d080493372531dcc8
    if(!username){
        throw new ApiError(400,"username is a required field")
    }

    const user = await User.findOne({
        username:username
    })
<<<<<<< HEAD
    
=======
    console.log("====user",user)
>>>>>>> b823f4bf17c62bd47ff9a05d080493372531dcc8
    if(!user){
        throw new ApiError(404,"User does not exist")
    }
     const isPasswordValid = await user.isPasswordCorrect(password)
<<<<<<< HEAD
     
=======
     console.log("======isPasswordValid",isPasswordValid)
>>>>>>> b823f4bf17c62bd47ff9a05d080493372531dcc8
     if(!isPasswordValid){
        throw new ApiError(401,"Invalid credentials")
     }

     const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)
     const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )
    
   
})




export {
    registerUser,
    loginUser
    
}