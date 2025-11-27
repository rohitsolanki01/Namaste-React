const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7 justify-items-center">
      {Array(9)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="p-4 w-64 rounded-lg shadow-sm animate-pulse"
          >
            {/* Image shimmer */}
            <div className="h-40 w-full bg-gray-300 rounded-md"></div>

            {/* Text shimmer */}
            <div className="mt-3 h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="mt-2 h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="mt-2 h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
