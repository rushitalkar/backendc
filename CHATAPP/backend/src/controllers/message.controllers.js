import User from "../models/user.model.js"
import Message from "../models/message.model.js"
import cloudinary from "../lib/cloudnary.js"
export const getUsers =async (req,res)=>{
    try {
        const loginUserId = req.user._id

        const filterdUsers = await User.find({_id : {$ne : loginUserId}}).select("-password")


        res.status(200).json(filterdUsers)

    } catch (error) {
        console.log("internal server error in getuser function " + error.message);
        res.status(500).json({message : "internal server error"})
        
    }
}

export const getMessages =async (req,res)=>{
    try {
        const {id : userTochatId} = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or : [
                {senderId : myId , reciverId : userTochatId},
                {senderId : userTochatId , reciverId : myId}
            ]
        })
        res.status(200).json(messages)


    } catch (error) {
        console.log("internal server error in getMessages function " + error.message);
        
        res.status(500).json({message : "internal server error"})
    }
}

export const sendMessage =async (req,res)=>{
    try {
        const {text , image} = req.body
        const{id :reciverId} = req.params
        const senderId = req.user._id

        let imageUrl;
        if (image) {
            const uploadResponce = await cloudinary.uploader.upload(image)
            imageUrl = uploadResponce.secure_url;
        }

        const newMessage = new Message({
            text,
            senderId,
            reciverId,
            image : imageUrl
        })

        await newMessage.save()

        //realtime functionality goes here
    } catch (error) {
        res.status(500).json({message : "internal server error"})
    }
}



