import RestaurantCard from "../components/RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  let [list, setList] = useState([]);
  let [filteredRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    // console.dir(data);
    setList(
      (list =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants)
    );
    setFilterRestaurant(list)
  };

  if (!list || list.length == 0) {
    return <Shimmer />;
  }
  function handleChange(e) {
    setSearchText(e.target.value);
  }
  const Notfound = () => <h1>Item Not Found!</h1>;

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
            const newList = data.filter((res) => res.info.avgRating > 4);
            setList(newList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurants, i) => (
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
