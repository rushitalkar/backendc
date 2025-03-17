import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config()
 const protectRoute = async (req , res, next) => {
   try {
      const tokennn = req.headers.cookie.split("=") // two values are genrated array in tokenn
      console.log(tokennn);
      
      const token = req.headers.cookie.split("=")[1];
      
      if (!token) {
       return res.status(401).json({ message: "token has not provided" });
      }
      
      const decoded = jwt.verify(token , process.env.JWT_SECRET);
      
        if (!decoded) {
            return res.status(401).json({ message: "invalid tokken" });
        }

        const user = await User.findById(decoded.userID).select("-password")

        if (!user) {
            return res.status(401).json({ message: "user not found" });
        }

        req.user = user;

        next();

   } catch (error) {
     console.log("internal server error " + error.message);
     res.status(500).json({ message: "internal server error"  });
     
   }

}

export default protectRoute