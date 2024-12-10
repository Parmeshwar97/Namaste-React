import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestourantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  // let [restaurantMenu, setRestaurantMenu] = useState(null);
  let { resId } = useParams();

  let [isVisible, setIsVisible] = useState(false);
  let [showIndex, setShowIndex] = useState(null);

  const restaurantMenu = useRestaurantMenu(resId);

  if (restaurantMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantMenu?.cards[2]?.card?.card?.info;

  //!Recommended Menu...
  //*HomeWork:- Display all Categories eg.thali,recommended etc

  const menu =
    restaurantMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
      .card?.itemCards;

  const Categories =
    restaurantMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="mt-28 px-5 text-center">
      <h1 className="font-bold text-lg">{name}</h1>
      <p>
        {cuisines} - {costForTwoMessage}
      </p>
      {/* Categories Accordions */}
      <div className="my-6">
        {Categories.map((c,index) => (
          <RestaurantCategories data={c?.card?.card} setShowIndex={()=>setShowIndex(index)} isVisible={index===showIndex?true:false} setIsVisible={setIsVisible}/>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
