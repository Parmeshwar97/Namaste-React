import { CON_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  let { resData } = props;
  let {
    name,
    costForTwo,
    cuisines,
    cloudinaryImageId,
    avgRating,
    sla,
  } = resData.info;
  return (
    <div className="res-card">
      {cloudinaryImageId.includes(".jpg") ? (
        <img className="res-img" src={cloudinaryImageId} />
      ) : (
        <img className="res-img" src={CON_URL + cloudinaryImageId} />
      )}

      <h3>{name}</h3>
      <h4>{costForTwo}</h4>
      <p>{cuisines}</p>
      <p>{avgRating} rating</p>
      <p>{sla.deliveryTime} minutes</p>
    </div>
  );
};

export default RestaurantCard;
