import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const BodyComponents = () => {
  const [resData, setResData] = useState([]);
  const [allData, setAllData] = useState([]); // store full data for searching
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  console.log("Body renders");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/recipes");
      const data = await res.json();

      setResData(data.recipes);
      setAllData(data.recipes);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <Shimmer />;
  }

  const handleSearch = () => {
    const filtered = allData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setResData(filtered);
  };

  return (
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
            let filtered = allData.filter((f) => f.rating > 4.6);
            setResData(filtered);
          }}
        >
          Top-Restro
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7 justify-items-center">
        {resData.map((item) => (
          <RestroCard key={item.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponents;
