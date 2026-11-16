import express from "express";
import Productsroutes from "./src/routes/Productsroutes.js";
import categoriesroutes from "./src/routes/categoriesroutes.js";

const app = express();

app.use(express.json());

app.use("/api/products", Productsroutes);
app.use("/api/categories", categoriesroutes);

export default app;