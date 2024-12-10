import ItemCard from "./ItemCard";

const ItemsList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item?.card?.info?.id}>
          {" "}
          <ItemCard info={item?.card?.info} />
        </li>
      ))}
    </ul>
  );
};
export default ItemsList;
