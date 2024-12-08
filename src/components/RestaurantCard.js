import { CON_URL, JPG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  let { resData } = props;
  let { name, costForTwo, cuisines, cloudinaryImageId, avgRating, sla } =
    resData.info;

  let img = cloudinaryImageId.toLowerCase();

  return (
    <div className="w-60 p-3 rounded-md bg-stone-400 min-h-fit h-[450px]">
      {img.includes(".jpg") ? (
        <img className="w-56" src={JPG_URL + cloudinaryImageId} />
      ) : (
        <img className="w-56" src={CON_URL + cloudinaryImageId} />
      )}

      <h3>{name}</h3>
      <h4>{costForTwo}</h4>
      <p>{cuisines}</p>
      <p>{avgRating} rating</p>
      <p>{sla.deliveryTime} minutes</p>
    </div>
  );
};

//Hight order component....
export const withPromotedLabel = () => {
  return (props) => {
    return (
      <div>
        <label>PROMOTED</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
