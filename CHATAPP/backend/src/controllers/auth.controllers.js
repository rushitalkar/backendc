import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { genrateToken } from "../lib/utils.js"
import cloudinary from "../lib/cloudnary.js"


const signup= async (req,res)=>{
    const {email,password, fullname } = req.body
    try {
        if (!password || !email || !fullname) {
            res.status(400).json({message : "all fields are required"})
        }
        if (password.length < 6) {
            return res.status(400).json({
                message : "Password must br 6 charecter"})

        }

        const user = await User.findOne({email})

        if (user) {
            return res.status(400).json({message : "email already exist"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        //new user Schema

        const newUser = new User({
            email : email,
            password : hashedPassword,
            fullname : fullname,

        })
        if (newUser) {
            //newUser._id is prebuilt key in Object
            genrateToken(newUser._id, res)
            await newUser.save()

            res.status(201).json({
                _id : newUser._id,
                fullname : newUser.fullname,
                email : newUser.email,
                profilePic : newUser.profilePic,
            })
            
        }else{
            return res.status(400).json({message : "invalid user data"})
        }



    } catch (error) {
        console.log("error in signup" + error.message);
        res.status(500).json({message : error.message})
        
    }    
}

const login =async(req,res)=>{
    const {email , password} = req.body
    try {
        const user = await User.findOne({email})
        if (!user) {
           return res.status(400).json({message : "invalid Credintial"})

        }
        const ispasswordcorrect = await bcrypt.compare(password , user.password)

        if (!ispasswordcorrect) {
            return res.status(401).json({message : "your password is wrong"})
        }

        genrateToken(user?._id , res)

        res.status(200).json({
            _id : user._id,
            fullname : user.fullname,
            email : user.email,
            profilePic : user.profilePic,
        })

    } catch (error) {
        console.log("invalid crential " + error.message);
        res.status(500).json( {message :"internal server error"})
    }
}


const logout=(req,res)=>{
    try {
        res.cookie('jwt' , "" , {maxAge : 0})
        res.status(200).json({message : "Logout Succesfully"})
    } catch (error) {
        console.log("internal server error" + error.message)
        res.status(401).json({message : "internal server error"})
    }
}

const updateProfile =async (req,res)=>{
   try {
     const{profilePic} = req.body
     const userID = req.user._id
 
     if(!profilePic){
         return res.status(401).json({message : "profile picture is require"})
     }
 
     const uploadResponce = cloudinary.uploader.upload(profilePic)
     const updateUser = await User.findByIdAndUpdate(userID , {profilePic : uploadResponce.secure_url}, {new : true})
     
     res.status(200).json(updateUser)
   } catch (error) {
     console.log("Internal server error" + error.message);
     res.status(401).json({message : "internal error"})
   }


}

const checkAuth =  async (req,res)=>{
    try {
        res.status(200).json(req.user)
    } catch (error) {
        console.log("error in auth controller" , error.message);
        
        res.status(401).json({message : "error in auth controller"})
    }
}
export {login,signup,logout , updateProfile , checkAuth}