import { CON_URL, JPG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  let { resData } = props;
  let { name, costForTwo, cuisines, cloudinaryImageId, avgRating, sla } =
    resData.info;

  let img = cloudinaryImageId.toLowerCase();

  return (
    <div className="w-60 p-3 rounded-md bg-stone-200 h-[400px] min-h-fit  ">
      {img.includes(".jpg") ? (
        <img className="w-full h-48" src={JPG_URL + cloudinaryImageId} />
      ) : (
        <img className="w-full h-48" src={CON_URL + cloudinaryImageId} />
      )}

      <h3 className="font-bold text-lg my-2">{name}</h3>
      <h4>{costForTwo}</h4>
      <p className="text-balance">{cuisines.join(' ')}</p>
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
