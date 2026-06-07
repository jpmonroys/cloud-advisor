# 🚀 Cloud Advisor – Google Cloud FinOps (PoC)

## 📌 Descripción del Proyecto

Cloud Advisor es una plataforma desarrollada como Prueba de Concepto (PoC) que permite analizar el uso de recursos en Google Cloud y generar recomendaciones orientadas a:

- 💰 Optimización de costes (FinOps)
- 🔐 Mejora de la seguridad
- ⚙️ Eficiencia en el uso de recursos cloud

El sistema traduce datos técnicos en decisiones de negocio, facilitando la toma de decisiones para equipos técnicos y no técnicos.

---

## 🎯 Objetivo

Desarrollar un sistema capaz de:

- Analizar datos cloud (actualmente mock)
- Generar recomendaciones accionables
- Visualizar impacto económico y riesgo
- Servir como base para integración con Google Cloud APIs

---

## 🏗️ Arquitectura del Sistema

Proyecto FullStack desacoplado:

ESTRUCTURA ACTUAL DE ARCHIVOS) 

## ⚙️ Tecnologías utilizadas

### Frontend
- React (Vite)
- JavaScript
- Fetch API

### Backend
- Node.js
- Express
- CORS

### DevOps
- Git (control de versiones)
- GitHub (repositorio remoto)

---

## 📁 Estructura del Proyecto


cloud-advisor/
├── backend/
│    ├── index.js
│    ├── package.json
│
├── frontend/
│    └── vite-project/
│         ├── src/
│         │    ├── App.jsx
│         │    └── main.jsx
│
├── .gitignore
└── README.md

---

## 🚀 Cómo ejecutar el proyecto

### 1️⃣ Backend

```bash
cd backend
npm install
node index.js

El backend quedará disponible en:
http://localhost:3000


2️⃣ Frontend
Shellcd frontend/vite-projectnpm installnpm run devMostrar más líneas
El frontend quedará disponible en:
http://localhost:5173


🔗 Endpoints disponibles
✅ Health check
GET /health

✅ Recomendaciones (mock)
GET /recommendations

Ejemplo de respuesta:
JSON[  {    "id": 1,    "type": "cost",    "title": "Reduce tamaño de VM",    "impact": 200  }]``Mostrar más líneas

👥 Equipo

Juan Pablo Monroy Soto
Manuel Santiago Díaz
Andrea Ximena Muñoz
Gabriel Pereira

Nota
Actualmente el sistema utiliza datos simulados (mock) para permitir el desarrollo desacoplado de la infraestructura cloud. La integración con Google Cloud se realizará en siguientes fases.