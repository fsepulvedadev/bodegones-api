import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { bodegonModel } from "./bodegones/model.js";

const PORT = process.env.PORT || 3000;

dotenv.config({ path: "./.env" });

import { bodegonesRouter } from "./bodegones/router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/bodegones", bodegonesRouter);
app.get("/", async (req, res) => {
  res.send("Hola mundo");
});

app.listen(PORT, () =>
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Servidor levantado en 3000"))
);
