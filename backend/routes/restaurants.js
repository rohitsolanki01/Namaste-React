// routes/restaurants.js
import express from "express";
import Restaurant from "../models/Restaurant.js";

const router = express.Router();

// GET all restaurants
router.get("/", async (req, res) => {
  try {
    const { city, search } = req.query;

    const filter = {};
    if (city) filter.city = city;
    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    const restaurants = await Restaurant.find(filter).sort({ avgRating: -1 });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET single restaurant by id
router.get("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
