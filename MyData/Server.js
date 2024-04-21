const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const DataModel = require("./DataModel");
const connectDB = require("./Database");

connectDB();

const app = express();
app.use(express.json({ limit: '10kb' }));
app.use(cors());

app.get("/readfromserver", (req, res) => {
  res.json({ message: "hey man from server" });
});

app.post("/writetodb", async (req, res) => {
  try {
    const { content } = req.body;
    const newData = new DataModel({ content });
    await newData.save();
    res.json("Data Saved Successfully");
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send("Server error while saving data");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
