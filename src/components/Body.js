import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
    let [restaurantList, setRestaurantList] = useState([]);
    let [searchQuery, setSearchQuery] = useState("");
    let [searchResult, setSearchResult] = useState([]);


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestaurantList(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setSearchResult(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const handleSearch = () => {
        const filterRes = searchQuery?restaurantList.filter(item=>
            item.info.name.toLowerCase().includes(searchQuery.toLowerCase())
        ):[];
        setSearchResult(filterRes);
    }
    
    return (restaurantList.length===0?<Shimmer/>:<div className='body'>
        <div className='search-container'>
            <input id="search-input" type="text" placeholder="Search..." value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
            <button className="btn-search" onClick={handleSearch}>Search</button>
        </div>
        <div className='res-container'>
            <div className='res-card-container'>
              {searchResult.map(restaurant=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)}
            </div>
        </div>
    </div>)
    }
 
export default Body;