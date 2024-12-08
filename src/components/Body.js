import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { NavLink } from "react-router-dom";
import { RES_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const PromotedCard = withPromotedLabel(RestaurantCard);

  function handleChange(e) {
    setSearchText(e.target.value);
  }

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>You are Offline.</h1>;
  }

  if (!list || list.length == 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <input
          onChange={handleChange}
          placeholder="search"
          value={searchText}
          type="text"
          className="my-4 p-2"
        />

        <button
          className="bg-lime-500 rounded-md px-2 mx-3"
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

      <div className="flex flex-wrap gap-5">
        {filteredRestaurant.map((restaurants) => (
          <NavLink
            key={restaurants.info.id}
            to={`/restaurant/${restaurants.info.id}`}
          >
            {console.log(restaurants.info)}
            {restaurants.info.promoted ? (
              <PromotedCard resData={restaurants} />
            ) : (
              <RestaurantCard resData={restaurants} />
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Body;
