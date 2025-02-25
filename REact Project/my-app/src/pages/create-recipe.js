
import { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserId";
import { useNavigate } from "react-router-dom";
import create from "./create.jpg"
export let CreateRecipe = ()=> {
   const UserId = useGetUserID();
   
   const navigate = useNavigate()
   const [recipe, setRecipe] = useState({
      name: "",
      ingredients: [],
      instructions: "",
      imageUrl: "",
      CookingTime: 0,
      description: "",
      userOwner: UserId,
    });

    const handlechange = (e)=>{
      let {name ,value} = e.target
      setRecipe({...recipe , [name] : value})
    }
     
    const handleIngredientschange = (event,idx)=>{
        const { value } = event.target;
        const ingredients = [...recipe.ingredients];
        ingredients[idx] = value;
        setRecipe({ ...recipe, ingredients });
    }

    
    

    const handleaddingredients = (e)=>{
        const ingredients = [...recipe.ingredients, ""];
        setRecipe({ ...recipe, ingredients });
    }
    console.log(recipe);
    const handleSubmit = async (event)=>{
       event.preventDefault()
       try {
        console.log(recipe);
        
         await axios.post("http://localhost:3001/recipes" , recipe)
         console.log(recipe);
         
         alert("recipe created")     
         navigate("/")    
       } catch (error) {
         console.log(error)
       }

    }
    

   return(
    <div >
       
       <div style={{backgroundImage : `url(${create})` , backgroundSize : "cover", height : "100vh"}}  class="bg-black border border-4 rounded-lg shadow relative">

    <div class="flex items-start justify-between p-5 border-b rounded-t">
        <h3 class="text-xl font-semibold text-white">
            Create Recipe
        </h3>
        
    </div>

    <div class="p-6 space-y-6">
        <form  onSubmit={handleSubmit}>
            <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                    <input type="text" value={recipe.name} name="name" id="name" onChange={handlechange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Name" required=""/>
                </div>
                <div class="col-span-6 sm:col-span-3">
                    {recipe.ingredients.map((ingredient, idx) => (
                    <input
                    key={idx}
                    type="text"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    name="ingredients"
                    value={ingredient}
                    onChange={(event) => handleIngredientschange(event, idx)}
          />
        ))}
                    <button class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleaddingredients} type="button">Add Ingredients</button>

                </div>
                <div class="col-span-6 sm:col-span-3">
                    <input type="text" name="instructions" value={recipe.instructions} onChange={handlechange} id="instructions" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Instruction" required/>
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <input type="text" name="imageUrl" id="imageUrl" value={recipe.imageUrl} onChange={handlechange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Image Url" required=""/>
                </div>
                
                <div class="col-span-6 sm:col-span-3">
                    <input type="number" name="CookingTime" id="price" value={recipe.CookingTime} onChange={handlechange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Image Url" required=""/>
                </div>
                <div class="col-span-full">
                    <textarea  id="description" name="description" rows="6" value={recipe.description} onChange={handlechange} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details" required></textarea>
                </div>
            </div>
            <div class="p-6 border-t border-gray-200 rounded-b">
        <button class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit" >Submit Recipe</button>
    </div>
        </form>
    </div>

    

</div>
    </div>
   )
}
