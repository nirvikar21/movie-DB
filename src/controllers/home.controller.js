import {ApiResponse} from "../utils/ApiResponse.js"
export const welcome = (req, res) => {
    console.log("test");
    res.status(200).send("Welcome to backend");
}