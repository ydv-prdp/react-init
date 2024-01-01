import React from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';



function RestaurantMenu() {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null){
        return (<Shimmer/>) 
    }
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return (
    <div className='menu'>
        <h1>{name}</h1>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwoMessage}</h4>
        <h2>Menu</h2>
        <ul>
            {itemCards?.map((item)=>(
                <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs{item.card.info?.defaultPrice/100 || item.card.info?.price/100}</li>
            ))}
        </ul>
    </div>
  )
}

export default RestaurantMenu