import mongoose from "mongoose";

export const bodegonesSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true },
    descripcion: { type: String, required: true },
    ubicacion: { type: String, required: true },
    imagen: { type: String },
    barrio: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    website: { type: String },
  },
  {
    timestamps: true,
  }
);
