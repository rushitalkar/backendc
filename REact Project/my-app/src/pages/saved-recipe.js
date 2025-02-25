import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserId";
import axios from "axios";
import save from "./saved.jpg"

export const SaveRecipe = ()=>{
  const [SavedRecipe, setSavedRecipes] = useState([]);
  const userId = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userId}`
        );
        setSavedRecipes(response.data.SavedRecipe);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, []);
  return (
<div style={{height:"115vh" , width:"100%", backgroundImage:`url(${save})` , backgroundSize:"cover"}}>
<div style={{margin:"auto"}} className="max-w-sm">
    <ul style={{display :"flex" , justifyContent:"center"}}>
       {
      SavedRecipe.map((recipe)=>(
      

<div key={recipe._id} style={{margin:"12px" }} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <h2 style={{marginLeft:"10px"}} className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipe.name} </h2>
    <a href="#">
        <img class="rounded-t-lg" src={recipe.imageUrl} alt="" />
    </a>
    <div class="p-5" style={{width:"334px"}}>
        
        <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Ingredients : {recipe.ingredients}</h3>
        <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Instruction : {recipe.instructions}</h3>
        <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Cooking Time : {recipe.CookingTime} Min</h3>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{recipe.description}</p>
        
    </div>
</div>
      ))
       }


    </ul>
    
</div>
</div>
  )
}