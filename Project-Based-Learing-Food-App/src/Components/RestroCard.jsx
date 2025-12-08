import React from "react";

const IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/";

const RestroCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    areaName,
  } = resData.info;

  return (
    <div className="w-[330px] rounded-2xl shadow-md hover:shadow-xl bg-white overflow-hidden transition-all duration-300 hover:scale-[1.03] cursor-pointer m-4">

      {/* Image */}
      <img
        src={IMG_URL + cloudinaryImageId}
        alt={name}
        className="h-44 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>

        {/* Cuisines */}
        <p className="text-sm text-gray-600 mt-1">
          {cuisines?.slice(0, 3).join(", ")}
        </p>

        {/* Rating + Delivery Time */}
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
            {sla?.deliveryTime} mins
          </span>
        </div>

        {/* Cost */}
        <p className="text-gray-800 font-semibold mt-2">{costForTwo}</p>

        {/* Area */}
        <p className="text-gray-500 text-sm mt-1">{areaName}</p>
      </div>
    </div>
  );
};

export default RestroCard;
