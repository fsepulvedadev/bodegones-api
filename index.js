import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const PORT = process.env.PORT || 3000;

dotenv.config({ path: "./.env" });

import { bodegonesRouter } from "./bodegones/router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/bodegones", bodegonesRouter);
app.get("/", async (req, res) => {
  console.log(mongoose.connection.readyState);
  res.send(`Hola mundo ${mongoose.connection.readyState}`);
});

app.listen(PORT, () =>
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Servidor levantado en 3000"))
);
