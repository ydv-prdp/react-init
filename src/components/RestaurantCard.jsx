
import { CDN_URL } from "../utils/constants"





const RestaurantCard=({resData})=>{
                const {cloudinaryImageId, name, cuisines, avgRating, sla} = resData?.info;

                return (
                     <div className='relative w-[300px] h-[500px] border p-4 bg-gray-100 hover:bg-gray-200'>
                        <img className='w-full h-[50%] mb-4' src={CDN_URL + cloudinaryImageId} alt="res-logo"/>
                        <h3 className="text-2xl font-bold dark:text-grey mb-4">{name}</h3>
                        <h4 className="text-1xl font-bold dark:text-slate-900 mb-4">{cuisines.join(", ")}</h4>
                        <h4 className="text-1xl font-bold dark:text-grey mb-4">{avgRating} star</h4>
                        <h4 className="text-1xl font-bold dark:text-grey">{sla.deliveryTime} min</h4>
                    </div>  
                )    
}

export const withVeg = (RestaurantCard) =>{
    return ({resData}) =>{
        return (
            <div>
                <div className="absolute z-10 bg-green-500 rounded-full w-[20px] h-[20px] mb-4"></div>
                <RestaurantCard resData={resData}/>
            </div>
        )
    }
}

export default RestaurantCard