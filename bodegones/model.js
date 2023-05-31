import mongoose from "mongoose";

import { bodegonesSchema } from "./schema.js";

export const bodegonModel = mongoose.model("bodegones", bodegonesSchema);
