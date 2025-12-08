import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const BodyComponents = () => {
  const [resData, setResData] = useState([]);
  const [allResData, setAllResData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6806403&lng=71.59464919999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await res.json();
      console.log(json.data);

      const restaurants = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants || [];
      console.log(restaurants);

      setResData(restaurants);
      setAllResData(restaurants);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching:", error);
      setLoading(false);
    }
  };

  if (loading) return <Shimmer />;

  const handleSearch = () => {
    const filtered = allResData.filter((item) =>
      item.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setResData(filtered);
  };

  return (
    <>
      <div className="body-container">
        <div className="flex justify-center mt-5">
          <input
            type="text"
            placeholder="Search food..."
            className="border-2 border-gray-300 p-3 rounded-md w-1/2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="bg-blue-400 text-white rounded-md ml-3 px-4"
            onClick={handleSearch}
          >
            Search
          </button>

          <button
            className="bg-green-400 text-white rounded-md ml-3 px-4"
            onClick={() => {
              const filtered = allResData.filter((f) => f.info.avgRating > 4.6);
              setResData(filtered);
            }}
          >
            Top-Restro
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7 justify-items-center">
          {resData.map((item) => (
            <RestroCard key={item.info.id} resData={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BodyComponents;
