// server.js or index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import restaurantRoutes from "./routes/restaurants.js";
import { seedRestaurants } from "./seed/restaurantsSeed.js";
import cors from "cors"

dotenv.config();
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,
  })
);

// Mongo connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");
    // Only call once or behind an ENV flag so it doesn't keep resetting
    // await seedRestaurants();
  })
  .catch((err) => console.error(err));

// Routes
app.use("/api/restaurants", restaurantRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
