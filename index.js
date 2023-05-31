import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { bodegonModel } from "./bodegones/model.js";

dotenv.config({ path: "./.env" });

import { bodegonesRouter } from "./bodegones/router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/bodegones", bodegonesRouter);
app.get("/", async (req, res) => {
  try {
    const bodegonCreado = await bodegonModel.create(req.body);
    res.status(201).send(bodegonCreado);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(3000, () =>
  mongoose
    .connect(
      "mongodb+srv://fsepulveda:14297010nrc@cluster0.koydvie.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Servidor levantado en 3000"))
);
