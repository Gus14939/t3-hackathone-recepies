import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/recipesContext'

export default function Details() {

  const {id} = useParams()
  const {recipeDetails, setRecipeDetails, favouritesList, handleAddToFavourites} = useContext(GlobalContext)

  useEffect(()=> {
    async function getRecipeDetails(){
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const data = await response.json()

      console.log(data)
      if(data?.data){
        setRecipeDetails(data?.data)
      }
    }
    getRecipeDetails()
  },[])

  console.log(recipeDetails, "recipeDetails")

  return (
    <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <div className='row-start-2 lg:row-start-auto'>
        <div className='h-96 overflow-hidden rounded-xl group'>
          <img 
            src={recipeDetails?.recipe.image_url}
            className='w-full h-full object-cover block group-hover:scale-105 duration-500'
            alt={recipeDetails?.recipe?.title}
            title={recipeDetails?.recipe?.title}
            />
        </div>
      </div>
        <div className='flex flex-col gap-3'>
          <span className='text-sm text-cyan-700 font-medium mt-0'>{recipeDetails?.recipe?.publisher}</span>
          <h1 className='text-3xl text-black truncate font-large font-extrabold'>{recipeDetails?.recipe?.title}</h1>
          <div>
            <button onClick={()=> handleAddToFavourites(recipeDetails?.recipe)} className='text-sm p-3 px-6 rounded-md uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white'>
              {
                favouritesList && favouritesList.length > 0 &&
                favouritesList.findIndex(item => item.id === recipeDetails?.recipe?.id) !== -1
                ? 'Remove from favourites'
                : 'Add to favourites'
              }
            </button>
          </div>
          <div>
            <span className='text-2xl font-semibold text-black'>Ingredients</span>
            <ul className='flex flex-col gap-0'>
              {
                recipeDetails?.recipe?.ingredients.map(ingredient=> (
                <li>
                  <span className='text-sm text-cyan-700 font-medium mt-5'>{ingredient.quantity} {ingredient.unit}</span>
                  <span className='text-sm text-cyan-700 font-medium mt-5'>{ingredient.description}</span>
                </li>))
              }
            </ul>
          </div>
        </div>
    </div>
  )
}
