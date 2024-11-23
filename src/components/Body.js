import RestaurantCard from "../components/RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { NavLink } from "react-router-dom";
import { RES_API } from "../utils/constants";

const Body = () => {
  let [list, setList] = useState([]);
  let [filteredRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let res = await fetch(RES_API);
      const data = await res.json();

      setList(
        (list =
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ||
          data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants)
      );
      setFilterRestaurant(list);
    } catch (error) {
      console.log(error);
    }
  };

  if (!list || list.length == 0) {
    return <Shimmer />;
  }
  function handleChange(e) {
    setSearchText(e.target.value);
  }

  return (
    <div className="body">
      <div className="filter">
        <input
          onChange={handleChange}
          placeholder="search"
          value={searchText}
          type="text"
          className="search"
        />

        <button
          className="search-btn"
          onClick={() => {
            setFilterRestaurant(
              list.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            const newList = list.filter((res) => res.info.avgRating > 4);
            setList(newList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurants) => (
          <NavLink
            key={restaurants.info.id}
            to={`/restaurant/${restaurants.info.id}`}
          >
            <RestaurantCard resData={restaurants} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Body;
