const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const PORT = 5000;
const app = express();
app.use(cors());

app.get("/menu/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const url =
      "https://proxy.corsfix.com/?" +
      encodeURIComponent(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6806403&lng=71.59464919999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        Accept: "application/json",
      },
    });

    const text = await response.text();

    // Swiggy sometimes returns JSON inside a string — FIX:
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.log("Received non-JSON response:", text);
      return res.status(500).json({ error: "Invalid JSON from Swiggy" });
    }

    res.json(data);
  } catch (error) {
    console.error("Backend error:", error);
    res.status(500).json({ error: "Server crashed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));