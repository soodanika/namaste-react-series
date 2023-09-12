import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    let [searchQuery, setSearchQuery] = useState("");
    let [searchResult, setSearchResult] = useState(restaurants);


    const handleSearch = () => {
        const filterRes = searchQuery?searchResult.filter(item=>
            item.info.name.toLowerCase().includes(searchQuery.toLowerCase())
        ):[];
        setSearchResult(filterRes);
    }

    return (<div className='body'>
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