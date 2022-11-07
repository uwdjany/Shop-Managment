import { Router } from "express";
import * as PurchaseController from "../controller/purchaseController";
import { verifyUserToken } from "../middleware/verifyToken";

const route = Router();
route.use(verifyUserToken)

route.route("/")
.post(PurchaseController.createController)
.get(PurchaseController.getAllController);

route.route("/:id")
.patch(PurchaseController.updateOneController)
.get(PurchaseController.getOneController)
.delete(PurchaseController.deleteOneController);

export default route;