import { useContext, useEffect, useState } from "react";
import RestaurantCard, {withVeg} from "./RestaurantCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = ()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const {loggedInUser, setUserInfo} = useContext(UserContext);
    
    useEffect(()=>{
        fetchData();
    },
    [])
    
    const RestaurantCardVeg = withVeg(RestaurantCard);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7954364&lng=80.9276861&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        setListOfRestaurants(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestaurants(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
   
    
    return listOfRestaurants?.length === 0? <Shimmer/> : (
        <div className='w-full mx-auto'>

            <div className="filter"> 
                <button className=""   
                    onClick={()=>{
                   setFilteredListOfRestaurants(listOfRestaurants.filter((item)=>item.info.avgRating>4))
                }}>
                    TOP RATED RESTAURANTS
                </button>
                <input type="text" value={loggedInUser} onChange={(e)=>setUserInfo(e.target.value)}/>
            </div>
            <div className='flex items-center'>
                <input type="text" className="" placeholder="Search" value={searchInput} onChange={(ev)=>setSearchInput(ev.target.value)} />
                <button 
                    onClick={()=>
                        {setFilteredListOfRestaurants(listOfRestaurants.filter((restaurant)=>restaurant.info.name.toString().toLowerCase().includes(searchInput.toLowerCase())))}
                    }
                    className=""
                >
                    Search
                </button>
            </div>
            <div className='flex flex-wrap mx-24 gap-4'>
                {filteredListOfRestaurants?.map((restaurant)=>(
                    <Link to={"/restaurant/" + restaurant.info.id}  key={restaurant.info.id}>
                        {restaurant.info?.veg ? <RestaurantCardVeg resData={restaurant}/> : <RestaurantCard resData={restaurant}/> }  
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Body