import { useEffect, useState } from "react";


function useRestaurantsList() {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);   
    useEffect(()=>{
        fetchData();
    },
    [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7954364&lng=80.9276861&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data?.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    console.log(listOfRestaurants)
    
  return listOfRestaurants;
}

export default useRestaurantsList