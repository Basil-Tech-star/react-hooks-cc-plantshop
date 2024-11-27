const express = require("express");
const app = express();
const PORT = process.env.PORT || 6001;

// Sample plant data
const plants = [
  { id: 1, name: "Aloe", image: "./images/aloe.jpg", price: 15.99 },
  { id: 2, name: "ZZ Plant", image: "./images/zz-plant.jpg", price: 25.98 },
  { id: 3, name: "Pilea peperomioides", image: "./images/pilea.jpg", price: 5.99 },
  // Add other plants here...
];

app.use(express.json());

// GET plants data
app.get("/plants", (req, res) => {
  res.json(plants);
});

// POST new plant
app.post("/plants", (req, res) => {
  const newPlant = { id: Date.now(), ...req.body };
  plants.push(newPlant);
  res.status(201).json(newPlant);
});

// PATCH to update plant price
app.patch("/plants/:id", (req, res) => {
  const { id } = req.params;
  const { price } = req.body;
  const plant = plants.find((p) => p.id === parseInt(id));
  if (plant) {
    plant.price = price;
    res.json(plant);
  } else {
    res.status(404).send("Plant not found");
  }
});

// DELETE plant
app.delete("/plants/:id", (req, res) => {
  const { id } = req.params;
  const plantIndex = plants.findIndex((p) => p.id === parseInt(id));
  if (plantIndex !== -1) {
    plants.splice(plantIndex, 1);
    res.status(204).end();
  } else {
    res.status(404).send("Plant not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
