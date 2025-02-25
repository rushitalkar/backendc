import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  name : {type : String , require : true },
  ingredients : [{type : String , require : true, },],
  instructions : {type : String , require : true },
  imageUrl : {type : String , require : true },
  CookingTime: {type : String , require : true },
  description : {type : String , require : true },
  userOwner : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "users",
      require : true
  }
})

export const RecipeModel = mongoose.model("recipes" , recipeSchema)