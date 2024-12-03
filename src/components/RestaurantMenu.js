import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // let [restaurantMenu, setRestaurantMenu] = useState(null);
  let { resId } = useParams();
  
  const restaurantMenu =  useRestaurantMenu(resId);

  if (restaurantMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantMenu?.cards[2]?.card?.card?.info;

  //!Recommended Menu...
  //*HomeWork:- Display all Categories eg.thali,recommended etc

  const menu =
    restaurantMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
      .card?.itemCards;

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
