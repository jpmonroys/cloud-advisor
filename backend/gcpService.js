// Simulación de datos (mock)
async function getRecommendationsMock() {
    return [
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
        description: "SSH expuesto a internet",
        impact: 0,
        priority: "Critical",
        effort: "Medium"
      }
    ];
  }
  
  module.exports = {
    getRecommendationsMock
  };

  function calculatePriority(impact, effort) {
    if (impact === "High" && effort === "Low") return "Critical";
    if (impact === "High") return "High";
    return "Medium";
  }
  
  module.exports = { calculatePriority };