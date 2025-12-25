import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useFetchData from "../utils/useFetchData";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComponents = () => {

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const { allResData, loading } = useFetchData("http://localhost:5000/api/restaurants");

  useEffect(() => {
    if (allResData) {
      setFilteredData(allResData);
    }
  }, [allResData]);

  const handleSearch = () => {
    const filtered = allResData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleTopRestro = () => {
    const filtered = allResData.filter((f) => f.avgRating > 4.3);
    setFilteredData(filtered);
  };

  const handleReset = () => {
    setFilteredData(allResData);
    setSearch("");
  };

const onlineStatus = useOnlineStatus();

if(onlineStatus == false){
  console.log("plse check your internet onnnetcions");
  return <h1 style={{textAlign:"center"}}>🔴 You are offline! Please check your internet connection.</h1>
}

  if (loading) return <Shimmer />;

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
        {filteredData.map((item) => (
          <RestroCard key={item._id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponents;

