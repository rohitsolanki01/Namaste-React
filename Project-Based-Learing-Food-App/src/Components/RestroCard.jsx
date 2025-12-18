import React from "react";
import { Link } from "react-router-dom";

const RestroCard = ({ resData }) => {
  console.log(resData)
  const {
    imageUrl,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    city,
    address,
  } = resData;

  return (
    <Link to={`/menu/${resData._id}`}>

  
    <div className="w-[330px] rounded-2xl shadow-md hover:shadow-xl bg-white overflow-hidden transition-all duration-300 hover:scale-[1.03] cursor-pointer m-4">

      <img
        src={imageUrl}
        alt={name}
        className="h-44 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>

        {/* Cuisines */}
        <p className="text-sm text-gray-600 mt-1">
          {cuisines?.slice(0, 3).join(", ")}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span
            className={`text-sm px-2 py-1 rounded-md font-medium ${
              avgRating >= 4
                ? "bg-green-100 text-green-700"
                : avgRating >= 3
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            ⭐ {avgRating}
          </span>

          <span className="text-sm text-gray-600">
            {deliveryTime} mins
          </span>
        </div>

        {/* Area/City */}
        <p className="text-gray-500 text-sm mt-1">
          {city} • {address}
        </p>
      </div>
    </div>
    </Link>
  );
};

export default RestroCard;
