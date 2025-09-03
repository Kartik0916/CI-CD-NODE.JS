const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Hello from Automated CI/CD Pipeline with Node.js, Docker & AWS!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
