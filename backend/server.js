const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/message", (req, res) => {
  res.json("Hello from backend!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});