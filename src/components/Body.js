import RestaurentCard from './RestaurentCard';
import { useEffect, useState } from 'react';
import resList from '../utils/mockData';
import Shimmer from './Shimmer';


const Body = () => {

    const [listOfRestaurents, setListOfRestaurents] = useState([]);
    const [filteredRestaurents, setFilteredRestaurents] = useState([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        )

        const json = await data.json();

        console.log(json);
        
        setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return listOfRestaurents.length === 0 ? (
        
        <Shimmer/>
        
    ) : (
        <div className="body">
            <div className="filter-container">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        // Filter the resturent cards and update UI
                        const filteredRestaurent = listOfRestaurents.filter(
                            (res) => res.info.name.includes(searchText)
                        );
                        console.log(filteredRestaurent);
                        setFilteredRestaurents(filteredRestaurent);
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurents.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setFilteredRestaurents(filteredList);
                } }>Top Rated Restaurents</button>
            </div>
            <div className="res-container">
              {
              filteredRestaurents.map((restaurent) => (
              <RestaurentCard key={restaurent.info.id} resData={restaurent}/>
              ))
              }
                
            </div>
        </div>
    )
};

export default Body;