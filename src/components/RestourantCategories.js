import ItemsList from "./ItemsList";
import { useState } from "react";

const RestaurantCategories = ({ data }) => {
  console.log(data);
  let [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="border-t-2 mx-auto bg-gray-50 w-1/2 py-4 border-b-[15px]">
      <div
        className="flex cursor-pointer justify-between px-2 text-lg"
        onClick={() => setIsVisible(!isVisible)}
      >
        <h2 className="font-bold">
          {data.title} ({data.itemCards.length})
        </h2>
        <span>{isVisible ? "⬆️" : "⬇️"}</span>
      </div>
      {isVisible && <ItemsList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategories;
