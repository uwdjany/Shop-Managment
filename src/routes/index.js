import { Router } from "express";
import purchaseController from "../controller/purchaseController";
import ProductController from "../controller/productController";
import SalesController from "../controller/salesController";
import UserController from "../controller/userController";

const route = Router();

//purchase routes
route.post("/purchase/create", purchaseController.createPurchase);
route.get("/get/allPurchase", purchaseController.getAllPurchase);
route.get("/purchase/:id", purchaseController.getOneById);

//create user route
route.post("/user/create", UserController.createUser);
route.get("/user/:id", UserController.getOneById);
route.delete("user/delete/:id", UserController.deleteUser);

//product route

route.post("/product/create", ProductController.createProduct);
route.get("/get/all",ProductController.getAllProduct);



export default route;
