import mongoose from "mongoose";
import dotenvx from '@dotenvx/dotenvx'
dotenvx.config()

const connectDB =async ()=>{
    const URL = process.env.MONGODB_URI

    console.log(URL);
    
    
    try {
        const conn = await mongoose.connect(URL)
        console.log("Mongoose Connect "+conn.connection.host);
        
    } catch (error) {
        console.log("Mongoose error"+error);
    }
}

export default connectDB