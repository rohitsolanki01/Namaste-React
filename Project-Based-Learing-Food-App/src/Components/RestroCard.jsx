const RestroCard = ({ resData }) => {
  const {
    image,
    name,
    cuisine,
    rating,
    prepTimeMinutes,
    servings,
  } = resData;

  return (
    <div className="p-4 hover:cursor-pointer hover:border-2 hover:border-gray-200 rounded-lg w-64 shadow-sm">
      <img src={image} alt={name} className="rounded-md h-40 w-full object-cover" />

      <h3 className="font-bold text-lg mt-2">{name}</h3>

      <p className="text-gray-600">Cuisine: {cuisine}</p>

      <p className="text-gray-600">Rating: ⭐ {rating}</p>

      <p className="text-gray-600">Prep Time: {prepTimeMinutes} mins</p>

      <p className="text-gray-600">Servings: {servings}</p>

      <p className="text-green-600 font-semibold">Available</p>
    </div>
  );
};

export default RestroCard;
