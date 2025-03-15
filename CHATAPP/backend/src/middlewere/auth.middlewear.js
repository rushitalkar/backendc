import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from "dotenv"
dotenv.config()
export const protectRoute = async (req, res, next) => {
   try {
      const token = req.cookies.jwt;
      if (!token) {
       return res.status(401).json({ message: "token has not provided" });
      }
      
      const decoded = jwt.verify(token , process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ message: "token has not provided" });
        }

        const user = await User.findOne(decoded.userID).select("-password")

        if (!user) {
            return res.status(401).json({ message: "user not found" });
        }

        req.user = user

        next();

   } catch (error) {
     console.log("internal server error" + error.message);
     res.status(401).json({ message: "internal server error" });
     
   }

}