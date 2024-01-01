import { CDN_URL } from "../utils/constants"




const RestaurantCard=({resData})=>{
                const {cloudinaryImageId, name, cuisines, avgRating, sla, id} = resData?.info
                return (
                     <div className='res-card'>
                        <img className='res-food-img' src={CDN_URL + cloudinaryImageId} alt="res-logo"/>
                        <h3>{name}</h3>
                        <h4>{cuisines.join(", ")}</h4>
                        <h4>{avgRating} star</h4>
                        <h4>{sla.deliveryTime} min</h4>
                        <h5>{id}</h5>
                    </div>  
                )    
}

export default RestaurantCard