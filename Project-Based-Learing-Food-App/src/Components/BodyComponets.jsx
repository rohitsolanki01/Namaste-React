import RestroCard from "./RestroCard"
import { useState } from "react";
import restorentData from "../data/restorentData"

const BodyComponents = () => {
  const arr = useState(restorentData?.data?.restaurants ?? []);
  const [resData , setRestorentData] = arr;
  console.log(resData);
  return (
    <div className="body-container">
      <div className="flex justify-center mt-5">
        <input
          type="text"
          placeholder="Search for food items..."
          className="border-2 border-gray-300 p-3 rounded-md w-1/2"
        />
        <button className="bg-blue-500 text-white rounded-md ml-2 w-20 hover:cursor-pointer" onClick={() => {
        let  res= resData.filter((f) => f.rating > 4.5);
          setRestorentData(res);
        }} >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7 justify-items-center">
        {resData.map((restorent) => (
          <RestroCard key={restorent.id} resData={restorent} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponents;