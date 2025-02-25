import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserId";
import axios from "axios";
import home from "./images.jpg"

export const Home = ()=>{
  const [recipes, setRecipes] = useState([]);
  const [SavedRecipe, setSavedRecipes] = useState([]);

  const userId = useGetUserID();
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
        const d = response.data
        d.map((recipe) => {
          console.log(recipe._id);
        })
        console.log(response.data);
        
        
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userId}`
        );
        setSavedRecipes(response.data.SavedRecipe);
        console.log(response.data);

      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeId) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeId,
        userId,
      });
      console.log(response);
      
      setSavedRecipes(response.data.SavedRecipe);
    } catch (err) {
      console.error(err);
    }
  };
  return (

<div style={{height:"115vh" , backgroundImage:`url(${home})` }}>

<div style={{margin : "auto" }} class="rounded-lg ">
    <ul style={{display :"flex" , justifyContent:"center"}}>
       {
      recipes.map((recipe)=>(
      

<div key={recipe._id} style={{margin:"12px"}} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <h2 style={{marginLeft:"10px"}} className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipe.name} </h2>
    <a href="#">
        <img class="rounded-t-lg" src={recipe.imageUrl} alt="" />
    </a>
    <div class="p-5" style={{width:"334px"}}>
        
        <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Ingredients : {recipe.ingredients}</h3>
        <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Instruction : {recipe.instructions}</h3>
        <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Cooking Time : {recipe.CookingTime} Min</h3>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{recipe.description}</p>
        <button
          onClick={() => saveRecipe(recipe._id)}
         class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
         {SavedRecipe?.includes(recipe._id) ? "Saved" : "Save"}  
        

        </button>
    </div>
</div>
      ))
       }


    </ul>
    
</div>
</div>
  )
}