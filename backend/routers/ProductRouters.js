import { ProductController } from "../controllers/ProductController.js";
import express from "express"
export const route = express.Router()

route.get("/products",ProductController.getAll)
route.get("/:id",ProductController.getById)
route.delete("/:id",ProductController.deleteProduct)
route.put("/:id",ProductController.updateProduct)
route.post("/:id",ProductController.postProduct)
