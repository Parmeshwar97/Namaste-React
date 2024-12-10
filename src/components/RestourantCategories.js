import ItemsList from "./ItemsList";

const RestaurantCategories = ({
  data,
  isVisible,
  setIsVisible,
  setShowIndex,
}) => {
  console.log(data);

  return (
    <div className="border-t-2 mx-auto bg-gray-50 w-1/2 py-4 border-b-[15px]">
      <div
        className="flex cursor-pointer justify-between px-2 text-lg"
        onClick={() => {
          setIsVisible(!isVisible);
          setShowIndex();
        }}
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
