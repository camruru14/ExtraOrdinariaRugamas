import express from "express";
import ProductsController from "../controller/ProductsController.js"

const router = express.Router();

router.route("/")
.get(ProductsController.getProducts)
.post(ProductsController.inserProducts);

router.route("/searchByName").post(ProductsController.searchByName)
router.route("/low-sotck").get(ProductsController.getLowStock)
router.route("/price-range").get(ProductsController.getProductPrinceRange)
router.route("/count").get(ProductsController.countProdcuts)

router.route("/:id")
.get(ProductsController.getProducts)
.put(ProductsController.updateProducts)
.delete(ProductsController.deleteProducts);

export default router;
