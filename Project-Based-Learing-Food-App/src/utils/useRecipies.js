import { useEffect, useState } from "react";

const useRecipes = (id) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const data = await fetch(
          `http://localhost:5000/api/restaurants/${id}`
        );
        if (!data.ok) throw new Error("Failed to fetch");

        const json = await data.json();
        setResInfo(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { resInfo, loading, error };
};

export default useRecipes;
