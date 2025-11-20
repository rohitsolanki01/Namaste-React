import RestroCard from "./RestroCard"
import restorentData from "../restorentData"


const BodyComponents = () => {
  return (
    <div className="body-container">
      <div className="flex justify-center mt-5">
        <input
          type="text"
          placeholder="Search for food items..."
          className="border-2 border-gray-300 p-3 rounded-md w-1/2"
        />
        <button className="bg-blue-500 text-white rounded-md ml-2 w-20">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7 justify-items-center">
        {restorentData.data.restaurants.map((restorent) => (
          <RestroCard key={restorent.id} resData={restorent} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponents;