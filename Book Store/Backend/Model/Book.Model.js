import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    name : String,
    title : String,
    Prize : Number,
    Category : String,
    image : String, 
    read_URL : String,
    id : mongoose.Schema.Types.ObjectId,
    

})

const Book = mongoose.model("Books" , BookSchema)

export default Book