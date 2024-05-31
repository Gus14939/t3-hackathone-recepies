import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context/recipesContext'


export default function Navbar() {

    const { searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext)

    console.log(searchParam)

  return (
    <nav className='flex justify-around items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>
        <h2 className='text-2x1 font-semibold'>
            <NavLink to={'/'} className='text-black hover-gray-700 duration-300'>
                FoodRecipes
            </NavLink>
        </h2>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name="search"
                value={searchParam}
                onChange={(event)=> setSearchParam(event.target.value)}
                placeholder=' Enter recipes...'
                className='bg-white/75 p-3 px8 rounded-full outline-none lg:w-96 shadow-md shadow-gray-200 focus:shadow-gray-300 focus:bg-gray-100 focus:shadow-sm duration-500'
            />
        </form>
        <ul className='flex gap-5'>
            <li>
                <NavLink to={'/'} className='text-black hover:text-gray-700 duration-300'>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/favourites'} className='text-black hover:text-gray-700 duration-300'>Favourites</NavLink>
            </li>
        </ul>
    </nav>
  )
}
