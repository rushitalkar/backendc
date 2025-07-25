import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
     email : {
        type : String,
        require : true,
        unique : true,
     },

     fullname : {
        type : String,
        require : true,
     },
     password : {
        type : String,
        require : true,
        minlength : 6,
     },
      profilePic : {
        type : String,
        default : ""
      }

},
{timestamps : true}
)

const User = mongoose.model("user" , UserSchema)

export default User;