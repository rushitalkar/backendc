import jwt from "jsonwebtoken";
import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
express().use
dotenv.config();
export const genrateToken = (userID , res ) => {
    const token = jwt.sign({userID} , process.env.JWT_SECRET , {
        expiresIn : "7d",
    })

    res.cookie('jwt', token, {
        maxAge : 7 * 24 * 60 *60 * 1000 ,
        httpOnly :true ,
        sameSite : "strict" ,
        secure : process.env.NODE_ENV !== "development",
    })

   return token;
}