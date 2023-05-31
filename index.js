import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

import { bodegonesRouter } from "./bodegones/router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/bodegones", bodegonesRouter);
app.get("/", (req, res) => res.send("Hola bienvenido a la api de bodegones"));

app.listen(3000, () =>
  mongoose
    .connect(process.env.DATABASE_URI)
    .then(() => console.log("Servidor levantado en 3000"))
);
