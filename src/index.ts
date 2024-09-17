import express from "express";
import prisma from "../prisma/prisma";
const app = express();
app.use(express.json());

// Project description route
app.get("/", (req, res) => {
  res.json({
    name: "Tesla Vehicles API",
    description:
      "A Node.js API to manage Tesla vehicles, including model, price, picture, and year of manufacture.",
    routes: {
      getAllVehicles: "GET /vehicles - Fetch all vehicles",
      getVehicleById: "GET /vehicles/:id - Fetch a specific vehicle by ID",
      createVehicle: "POST /vehicles - Create a new vehicle",
      updateVehicle: "PUT /vehicles/:id - Update a specific vehicle by ID",
      deleteVehicle: "DELETE /vehicles/:id - Delete a specific vehicle by ID",
    },
  });
});

// Get all vehicles
app.get("/vehicles", async (req, res) => {
  try {
    const vehicles = await prisma.vehicle.findMany();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get a vehicle by ID
app.get("/vehicles/:id", async (req, res) => {
  const { id } = req.params;
  const vehicle = await prisma.vehicle.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(vehicle);
});

// Create a new vehicle
app.post("/vehicles", async (req, res) => {
  const { model, price, picture, year } = req.body;
  const newVehicle = await prisma.vehicle.create({
    data: { model, price, picture, year },
  });
  res.json(newVehicle);
});

// Update a vehicle
app.put("/vehicles/:id", async (req, res) => {
  const { id } = req.params;
  const { model, price, picture, year } = req.body;
  const updatedVehicle = await prisma.vehicle.update({
    where: { id: parseInt(id) },
    data: { model, price, picture, year },
  });
  res.json(updatedVehicle);
});

// Delete a vehicle
app.delete("/vehicles/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.vehicle.delete({
    where: { id: parseInt(id) },
  });
  res.sendStatus(204);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
