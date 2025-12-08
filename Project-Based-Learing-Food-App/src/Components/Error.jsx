import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <div
        className="h-screen w-full
            flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 ro-indigo-600 text-white px-4
            "
      >
        <h1 className="text-9xl font-extrabold drop-shadow-xl animate-bounce">
          404
        </h1>

        <p className="text-lg text-gray-200 mt-2 text-center max-w-md">
          {err.statusText || err.message || "Page Npt Found"}
        </p>

        <Link
          to="/"
          className="mt-6 mx-6 px-2 py-3 
                bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition-all duration-300
                "
        >
          Go Back Home
        </Link>

        <div className="w-56 h-56 bg-white opacity-10 rounded-full absolute bottom-10 rotate-45 animate-pulse"></div>
      </div>
    </>
  );
};

export default Error;
