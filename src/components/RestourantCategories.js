const RestaurantCategories = ({data})=>{
    console.log(data);
        
    return(

        <div className="my-2 mx-auto font-bold bg-gray-50 w-1/2 flex justify-between p-3 shadow-lg">
            <h2>{data.title} ({data.itemCards.length})</h2>
            <span>⬇️</span>
        </div>
    )
}
export default RestaurantCategories;