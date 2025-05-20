import mongoose from "mongoose";
import schemaProducts from "./schemas/schema.products.mjs";

export const Productos = mongoose.model('Productos',schemaProducts)
