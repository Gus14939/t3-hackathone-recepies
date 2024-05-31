import React, { useContext } from 'react'
import { GlobalContext } from '../context/recipesContext'
import RecipeItem from './RecipeItem'

export default function Favourites() {
    const {favouritesList} = useContext(GlobalContext)


    return (
      <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
        {
          favouritesList && favouritesList.length > 0 
          ? favouritesList.map((item, index) => <RecipeItem key={index} item={item}  />)
          : <div>
            <p className='gl:text-4xl text-xl text-center text-black font-extrabold'>Nothing in favourites</p>
          </div>
        }
      </div>
    )
}
