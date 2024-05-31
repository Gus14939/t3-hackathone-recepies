import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);


export default function GlobalState({children}){
    

    const [searchParam, setSearchParam] = useState('')
    const [loading, setLoading] = useState(false)
    const [recipeList, setRecipeList] = useState([])
    const [recipeDetails, setRecipeDetails] = useState(null)
    const [favouritesList, setFavouritesList] = useState([])

    const navigate = useNavigate()

    async function handleSubmit(event){
        event.preventDefault()
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const data = await res.json()

            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes)
                setLoading(false)
                setSearchParam('')
                navigate('/')
            }

            console.log(data)
        } catch (e) {
            console.log(e)
            setLoading(false)
            setSearchParam('')
        }
    }
    function handleAddToFavourites(getCurrentItem){
        console.log(getCurrentItem)
        let copyFavouriteList = [...favouritesList];
        const index = copyFavouriteList.findIndex(item=> item.id === getCurrentItem.id)

        if(index === -1){
            copyFavouriteList.push(getCurrentItem)
        }else{
            copyFavouriteList.splice(index)
        }

        setFavouritesList(copyFavouriteList)

    }

    console.log(favouritesList, 'favouritesList')

    return <GlobalContext.Provider value={{ 
                searchParam, loading, recipeList, 
                setSearchParam, handleSubmit,
                recipeDetails, setRecipeDetails, 
                handleAddToFavourites, favouritesList

            }}>
                {children}
            </GlobalContext.Provider>
}