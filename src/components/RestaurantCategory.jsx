import { useState } from "react"
import { imageURL } from "../utils/constants";


function RestaurantCategory({category, showItems, setShowIndex}) {
  const handleClick = () =>{
    setShowIndex();
  }
  return (
    <div className="w-1/2 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <h1 className="text-2xl font-bold border border-gray-100 bg-gray-200 hover:cursor-pointer mb-4" onClick={handleClick}>{category.title} ({category?.itemCards.length})</h1>
        {showItems &&  <ul>
            {category?.itemCards.map((item)=>(
                <li key={item?.card?.info?.id}>
                    <div className="flex justify-between items-center mb-4 border border-b-slate-100 p-2">
                        <div className="w-[70%]">
                           <h3 className="font-bold">{item?.card?.info?.name}</h3>
                           {item?.card?.info?.price ? <h3>Rs {item?.card?.info?.price/100}</h3> : <h3>Rs {item?.card?.info?.defaultPrice/100}</h3> }
                           <h4>{item?.card?.info?.description}</h4>
                        </div>
                        <div className="flex flex-col relative">
                            {item?.card?.info?.imageId && <img alt="menu item" className="" src={imageURL + item?.card?.info?.imageId}/>}
                         {item?.card?.info?.imageId && <button className="py-2 px-2 bg-gray-700 w-1/2 rounded-full mx-auto text-white my-2 absolute top-[70%] left-14">
                                Add
                            </button> }   
                        </div>
                    </div>
                </li>
            ))}
        </ul> }
       
        
    </div>
  )
}

export default RestaurantCategory