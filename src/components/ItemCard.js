import { CDN_URL, JPG_URL } from "../utils/constants";
import userContext from "../utils/contextApi";
import { useContext } from "react";

const ItemCard = ({ info }) => {
  //! using Context
  const { user } = useContext(userContext);
  // console.log(info);
  return (
    <div className="border-b-4 text-left flex justify-between px-2 py-3 my-4 w-full">
      <div className="w-4/6">
        <p className="font-bold text-gray-800">{info.name}</p>

        <span>{user}</span>

        <p className="font-bold">₹{(info.defaultPrice || info?.price) / 100}</p>

        {info?.ratings?.aggregatedRating?.rating && (
          <p className="text-sm my-2">
            ⭐{info?.ratings?.aggregatedRating?.rating}
          </p>
        )}
        <p className="text-sm text-gray-700">{info?.description}</p>
      </div>

      <div className="relative">
        <button className="bg-white px-6 py-2 rounded-lg text-green-600 font-bold absolute bottom-1 right-8 shadow-lg">
          Add +
        </button>
        {info?.imageId.includes(".jpg") ? (
          <img
            className="w-40 h-36 rounded-lg"
            src={JPG_URL + info?.imageId}
            alt={info?.imageId}
          />
        ) : (
          <img
            className="w-40 h-36 rounded-lg"
            src={CDN_URL + info?.imageId}
            alt={info?.imageId}
          />
        )}
      </div>
    </div>
  );
};

export default ItemCard;
