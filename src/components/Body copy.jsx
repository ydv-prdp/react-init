import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantsList from "../utils/useRestaurantsList";





const Body = ()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    
    
    // useEffect(()=>{
    //     fetchData();
    // },
    // [])
    
    // const fetchData = async() => {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7954364&lng=80.9276861&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    //     const json = await data.json();
    //     setListOfRestaurants(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     setFilteredListOfRestaurants(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }
    const list = useRestaurantsList();
    console.log(list)
    return listOfRestaurants?.length === 0? <Shimmer/> : (
        <div className='body'>

            <div className="filter"> 
                <button  onClick={()=>{
                   setListOfRestaurants(listOfRestaurants.filter((item)=>item.info.avgRating>4))
                }} className="filter_btn">
                    TOP RATED RESTAURANTS
                </button>
            </div>
            <div className='search'>
                <input type="text" className="search-box" value={searchInput} onChange={(ev)=>setSearchInput(ev.target.value)}/>
                <button 
                    onClick={()=>
                        {setFilteredListOfRestaurants(listOfRestaurants.filter((restaurant)=>restaurant.info.name.toString().toLowerCase().includes(searchInput.toLowerCase())))}
                    }
                >
                    Search
                </button>
            </div>
            <div className='res-container'>
                {filteredListOfRestaurants?.map((restaurant)=>(
                   <Link to={"/restaurant/" + restaurant.info.id}  key={restaurant.info.id}> <RestaurantCard resData={restaurant}/> </Link>
                ))}
            </div>
        </div>
    )
}
export default Body