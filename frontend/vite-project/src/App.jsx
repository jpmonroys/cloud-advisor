import { useEffect, useState } from "react";


function App() {
  const [recommendations, setRecommendations] = useState([]);
  const totalRecommendations = recommendations.length;

  const totalSavings = recommendations
    .filter(r => r.type === "cost")
    .reduce((acc, r) => acc + r.impact, 0);

  useEffect(() => {
    fetch("http://localhost:3000/recommendations")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en backend");
        }
        return res.json();
      })
      .then((data) => setRecommendations(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Cloud Advisor</h1>

    <div style={{ marginBottom: "20px" }}>
      <h2>Métricas</h2>
      <p><strong>Total recomendaciones:</strong> {totalRecommendations}</p>
      <p><strong>Ahorro estimado:</strong> ${totalSavings}</p>
    </div>

    <h2>Recomendaciones</h2>

      {recommendations.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        recommendations.map((rec) => (
          <div key={rec.id} style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px"
          }}>
            <h3>{rec.title}</h3>
            <p>{rec.description}</p>

            <p><strong>Tipo:</strong> {rec.type}</p>
            <p><strong>Impacto:</strong> ${rec.impact}</p>
            <p><strong>Prioridad:</strong> {rec.priority}</p>
            <p><strong>Esfuerzo:</strong> {rec.effort}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
