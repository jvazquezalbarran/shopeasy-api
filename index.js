require("./telemetry"); // debe ir antes que express

const express = require("express");
const telemetry = require("./telemetry");

const app = express();
const port = process.env.PORT || 3000;

// Simula una lista de productos
const products = [
    { id: 1, name: "Camiseta", price: 20 },
    { id: 2, name: "Pantalón", price: 35 },
];

// Middleware simple para log
app.use((req, res, next) => {
    telemetry.trackTrace({ message: `Petición a ${req.url}`, severity: 1 });
    next();
});

// Ruta principal
app.get("/", (req, res) => {
    telemetry.trackEvent({ name: "PaginaPrincipalVisitada" });
    res.send("Bienvenido a la API de productos 📦");
});

// Obtener productos
app.get("/products", (req, res) => {
    telemetry.trackEvent({ name: "ConsultaProductos" });
    res.json(products);
});

// Simular error
app.get("/error", (req, res) => {
    try {
        throw new Error("Error de prueba");
    } catch (err) {
        telemetry.trackException({ exception: err });
        res.status(500).send("Ocurrió un error");
    }
})

// Agregar Outgoing Request
const axios = require("axios");

app.get("/external", async (req, res) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        res.json(response.data);
    } catch (err) {
        telemetry.trackException({ exception: err });
        res.status(500).send("Error externo");
    }
});

app.listen(port, () => {
    telemetry.trackTrace({ message: `Servidor iniciado en puerto ${port}` });
    console.log(`API corriendo en http://localhost:${port}`);
});
