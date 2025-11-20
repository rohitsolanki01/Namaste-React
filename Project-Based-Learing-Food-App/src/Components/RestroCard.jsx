const RestroCard = ({ resData }) => {

  console.log(resData);
const { image, name, cuisines, rating, deliveryTime, costForTwo, isOpen } = resData;
  return (
    <div className="p-4 hover:cursor-pointer hover:border-2 hover:border-gray-200 rounded-lg w-64 shadow-sm">
      <img src={image} alt="restaurant" className="rounded-md" />

      <h3 className="font-bold text-lg mt-2">{name}</h3>

      <p className="text-gray-600">
        Cuisine: {cuisines.join(",")}
      </p>

      <p className="text-gray-600">Rating: ⭐ {rating}</p>

      <p className="text-gray-600">Delivery Time: {deliveryTime}</p>

      <p className="text-gray-600">Cost: {costForTwo}</p>

      <p className={isOpen ? "text-green-600" : "text-red-600"}>
        {isOpen ? "Open Now" : "Closed"}
      </p>
    </div>
  );
};

export default RestroCard;
