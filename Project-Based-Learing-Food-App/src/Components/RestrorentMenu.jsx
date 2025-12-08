import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestrorentMenu = () => {
  const { id } = useParams(); // 👈 dynamic restaurantId from URL
  console.log(id)

  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

const fetchData = async () => {
  try {
    const res = await fetch(`http://localhost:5000/menu/${id}`); // ✔ fixed
    const json = await res.json();

    if (!json?.data) {
      setError(true);
      return;
    }

    setResInfo(json.data);
  } catch (e) {
    setError(true);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchData();
  }, [id]); // 👈 fetch menu when restaurantId changes

  if (loading) return <h1>Loading…</h1>;
  if (error) return <h1>Failed to fetch JSON ❌</h1>;

  return (
    <>
      <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines?.join(", ")}</p>
      <p>⭐ {resInfo?.cards[0]?.card?.card?.info?.avgRatingString}</p>

      <h2>Menu:</h2>
      <ul>
        {
          resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.filter(c => c.card?.card?.itemCards)
            ?.flatMap(c => c.card.card.itemCards)
            ?.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} — ₹{item.card.info.price / 100}
              </li>
            ))
        }
      </ul>
    </>
  );
};

export default RestrorentMenu;
