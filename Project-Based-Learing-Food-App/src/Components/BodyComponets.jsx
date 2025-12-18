import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const BodyComponents = () => {
  const [allResData, setAllResData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/restaurants");
      const json = await res.json();
      console.log(json);

      const restaurants = json || [];
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
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setResData(filtered);
  };

  const handleTopRestro = () => {
    const filtered = allResData.filter((f) => f.avgRating > 4.3); // adjust threshold as you like
    setResData(filtered);
  };

  const handleReset = () => {
    setAllResData(allResData);
    setSearch("");
  };

  return (
    <div className="body-container">
      <div className="flex justify-center mt-5">
        <input
          type="text"
          placeholder="Search restaurant..."
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
          onClick={handleTopRestro}
        >
          Top-Restro
        </button>

        <button
          className="bg-gray-400 text-white rounded-md ml-3 px-4"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7 justify-items-center">
        {allResData.map((item) => (
          <RestroCard key={item._id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponents;

