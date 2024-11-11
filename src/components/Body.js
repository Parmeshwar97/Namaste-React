import resList from "../utils/mockData";

import RestaurantCard from "../components/RestaurantCard";
import { useState } from "react";
const Body = () => {
  const [list,setList] = useState(resList);
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
