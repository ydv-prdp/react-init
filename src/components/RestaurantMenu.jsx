import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';



function RestaurantMenu() {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);
    
    if(resInfo === null){
        return (<Shimmer/>) 
    }
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
    console.log(categories)
    return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold mb-1'>{name}</h1>
        <h4 className='text-2xl font-bold mb-1'>{cuisines.join(", ")}</h4>
        <h4 className='text-2xl font-bold mb-1'>{costForTwoMessage}</h4>
        <h2  className='text-2xl font-bold mb-1'>Menu</h2>
        {/* <ul>
            {itemCards?.map((item)=>(
                <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs{item.card.info?.defaultPrice/100 || item.card.info?.price/100}</li>
            ))}
        </ul> */}
        {categories.map((category, index)=>(
            <RestaurantCategory category={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={()=>setShowIndex(index)}/>
        ))}
    </div>
  )
}

export default RestaurantMenu