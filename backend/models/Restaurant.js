// models/Restaurant.js
import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    cuisines: [{ type: String, trim: true }],
    address: { type: String, trim: true },
    city: { type: String, trim: true },
    avgRating: { type: Number, default: 0 },
    deliveryTime: { type: Number, default: 30 }, // in minutes
    imageUrl: { type: String, required: true }, // used directly in <img src=...>
    isOpen: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
