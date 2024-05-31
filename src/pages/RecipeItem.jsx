import { Link } from 'react-router-dom'

export default function RecipeItem({ item}) {
  return (
    <div className='flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-md gap-5 border-2 rounded-2xl border-white'>
        <div key={item.id} className='h-40 flex justify-center overflow-hidden item-center rounded-xl'>
            <img src={item?.image_url} alt="recipe item" className='block w-full' />
        </div>
        <div>
            <span className='text-sm text-cyan-700 font-medium'>{item?.publisher}</span>
            <h1 className='text-3xl text-black truncate font-large font-extrabold'>{item?.title}</h1>
        </div>
        <div>
            <Link to={`/Recipe/${item?.id}`} className='text-sm p-2 px-8 rounded-md uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white'>Details</Link>
        </div>
            
    </div>
  )
}
