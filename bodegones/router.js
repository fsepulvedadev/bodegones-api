import express from "express";
import { bodegonModel } from "./model.js";

export const bodegonesRouter = express.Router();

bodegonesRouter.post("/", async (req, res) => {
  try {
    const productoCreado = await bodegonModel.create(req.body);
    res.status(201).send(productoCreado);
  } catch (e) {
    res.status(500).send(e);
  }
});

bodegonesRouter.get("/", async (req, res) => {
  try {
    /*     const productos = await bodegonModel.find();
    res.send(productos); */
    res.send("ESTO ANDA");
  } catch (error) {
    res.status(500).send(JSON.stringify(error));
  }
});
bodegonesRouter.get("/:id", async (req, res) => {
  try {
    const producto = await bodegonModel.findOne({ _id: req.params.id });
    res.send(producto);
  } catch (error) {
    res.status(404).send(error);
  }
});

bodegonesRouter.patch("/:id", async (req, res) => {
  try {
    const bodegonesActualizados = await bodegonModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.status(200).send(bodegonesActualizados);
  } catch (error) {
    res.status(404).send(error);
  }
});

bodegonesRouter.delete("/:id", async (req, res) => {
  try {
    await bodegonModel.findOneAndDelete({ _id: req.params.id });
    res.sendStatus(204);
  } catch (error) {
    res.status(404).send(error);
  }
});
