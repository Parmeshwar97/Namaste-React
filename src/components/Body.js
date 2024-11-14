import resList from "../utils/mockData";

import RestaurantCard from "../components/RestaurantCard";
import { useEffect, useState } from "react";
const Body = () => {
  let [list, setList] = useState([]);

  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async ()=>{
    let res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    console.dir(data)
    console.dir(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setList(list = data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setList(resList.filter((res) => res.info.avgRating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {list.map((restaurants) => (
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
