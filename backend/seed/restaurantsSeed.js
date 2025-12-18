// seed/restaurantsSeed.js
import Restaurant from "../models/Restaurant.js";
import mongoose from "mongoose";

const restaurants = [
  {
    name: "Spice Route Kitchen",
    description: "North Indian and Chinese dishes with bold flavors.",
    cuisines: ["North Indian", "Chinese"],
    address: "12 MG Road, Koramangala",
    city: "Bengaluru",
    avgRating: 4.3,
    deliveryTime: 35,
    imageUrl:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    isOpen: true,
  },
  {
    name: "Urban Bites Cafe",
    description: "Burgers, fries, coffee and quick bites.",
    cuisines: ["Fast Food", "Cafe"],
    address: "88 Residency Layout, Indiranagar",
    city: "Bengaluru",
    avgRating: 4.1,
    deliveryTime: 25,
    imageUrl:
      "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
    isOpen: true,
  },
  {
    name: "Tandoori Nights",
    description: "Specialty tandoor and kebab house.",
    cuisines: ["Mughlai", "Tandoor"],
    address: "44 Park Street, Banjara Hills",
    city: "Hyderabad",
    avgRating: 4.5,
    deliveryTime: 40,
    imageUrl:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    isOpen: true,
  },
  {
    name: "Green Leaf Veg Diner",
    description: "Pure veg thalis and South Indian meals.",
    cuisines: ["South Indian", "Veg"],
    address: "21 Gandhi Road, Anna Nagar",
    city: "Chennai",
    avgRating: 4.2,
    deliveryTime: 30,
    imageUrl:
      "https://images.pexels.com/photos/5908258/pexels-photo-5908258.jpeg",
    isOpen: true,
  },
  {
    name: "Sushi & Wok House",
    description: "Pan-Asian kitchen serving sushi, dim sum and noodles.",
    cuisines: ["Japanese", "Asian"],
    address: "5th Floor, Food Court, Phoenix Mall",
    city: "Pune",
    avgRating: 4.4,
    deliveryTime: 45,
    imageUrl:
      "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
    isOpen: false,
  },
];

export const seedRestaurants = async () => {
  await Restaurant.deleteMany({});
  await Restaurant.insertMany(restaurants)
  console.log("Restaurants seeded");
};
