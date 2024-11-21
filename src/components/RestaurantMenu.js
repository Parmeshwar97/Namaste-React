import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  let [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch(MENU_API);

    const apiData = await res.json(res);
    setRestaurantMenu(apiData.data);
  };

  if (restaurantMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantMenu?.cards[2]?.card?.card?.info;

  //!Recommended Menu...
  //*HomeWork:- Display all Categories eg.thali,recommended etc

  const menu =
    restaurantMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
      .card?.itemCards;
  console.log(menu[0].card);

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {menu.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."} {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;