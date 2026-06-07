const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ health
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// ✅ endpoint mock
app.get("/recommendations", (req, res) => {
  res.json([
    {
      id: 1,
      type: "cost",
      title: "Reduce tamaño de VM",
      description: "Instancia sobredimensionada",
      impact: 200,
      priority: "High",
      effort: "Low"
    },
    {
      id: 2,
      type: "security",
      title: "Firewall abierto en puerto 22",
      description: "SSH expuesto",
      impact: 0,
      priority: "Critical",
      effort: "Medium"
    }
  ]);
});

app.listen(3000, () => {
  console.log("Servidor activo en http://localhost:3000");
});