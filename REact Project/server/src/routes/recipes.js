import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/recipes.js";
import { UserModel } from "../models/users.js";

const router = express.Router();

router.get("/" , async (req,res )=>{
   try {
    const responce = await RecipeModel.find({});
    res.json(responce)
   } catch (error) {
      res.json({message : error})
   }
})

router.post("/" , async (req,res )=>{
  const recipe = new RecipeModel({
   _id: new mongoose.Types.ObjectId(),
   name: req.body.name,
   ingredients: req.body.ingredients,
   instructions: req.body.instructions,
   imageUrl: req.body.imageUrl,
   CookingTime: req.body.CookingTime,
   userOwner: req.body.userOwner,
   description: req.body.description,
  });
  console.log(recipe);
  
  try {
   const responce = await recipe.save();
   res.json(responce)
   console.log(responce);
   
   
  } catch (error) {
     res.json({message : error})
  }
})

router.put("/", async (req,res )=>{

   try {
      const recipe = await RecipeModel.findById(req.body.recipeId);
      const user = await UserModel.findById(req.body.userId);
      user.SavedRecipe.push(recipe);
      await user.save();
      res.json({SavedRecipe : user.SavedRecipe})
   } catch (error) {
      res.json({message : error})
   }
 })

 router.get("/savedRecipes/ids/:userId" , async (req,res )=>{
   try {
      const user = await UserModel.findById(req.params.userId);
      res.json({SavedRecipe: user?.SavedRecipe})
   } catch (error) {
      res.json({message : error})
   }
 })

 router.get("/savedRecipes/:userId" , async (req,res )=>{
   try {
      const user = await UserModel.findById(req.params.userId);
      const SavedRecipe = await RecipeModel.find({_id : {
         $in : user.SavedRecipe}})

         res.status(201).json({ SavedRecipe });

   } catch (error) {
      res.json({message : error})
   }
 })


export  {router  as recipesRouter}