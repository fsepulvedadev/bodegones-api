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
    const bodegones = await bodegonModel.find();
    res.send(bodegones);
  } catch (error) {
    res.status(500).send(JSON.stringify(error));
  }
});

app.listen(3000, () =>
  mongoose
    .connect(DATABASE_URI)
    .then(() => console.log("Servidor levantado en 3000"))
);
