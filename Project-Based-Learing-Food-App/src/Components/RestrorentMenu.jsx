import { useParams } from "react-router-dom";
import useRecipes from "../utils/useRecipies"

const RestaurantMenu = () => {
  const { id } = useParams();

  const { resInfo, loading, error } = useRecipes(id);

  if (loading) return <h1>Loading…</h1>;
  if (error || !resInfo) return <h1>Failed to fetch restaurant ❌</h1>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex gap-4">
        <img
          src={resInfo.imageUrl}
          alt={resInfo.name}
          className="w-48 h-32 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-2xl font-bold">{resInfo.name}</h1>
          <p className="text-gray-600">
            {resInfo.cuisines?.join(", ")}
          </p>
          <p className="text-gray-700 mt-1">
            ⭐ {resInfo.avgRating} · {resInfo.deliveryTime} mins
          </p>
          <p className="text-gray-500 mt-1">
            {resInfo.address}, {resInfo.city}
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Menu</h2>
      <p className="text-gray-500">
        Menu items will come from your own /menu API later.
      </p>
    </div>
  );
};

export default RestaurantMenu;
