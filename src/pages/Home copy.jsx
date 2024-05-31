import React, { useContext } from 'react'
import { GlobalContext } from '../context/recipesContext'
import RecipeItem from './RecipeItem'

export default function Home() {

  const { favouriteList } = useContext(GlobalContext)

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        favouriteList && favouriteList.length > 0 
        ? favouriteList.map((item, index) => <RecipeItem key={index} item={item}  />)
        : <div>
          <p className='gl:text-4xl text-xl text-center text-black font-extrabold'>
            Nothing is added to favourites</p>
        </div>
      }
    </div>
  )
}
