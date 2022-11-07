import { Router } from "express";
import * as UserController from "../controller/userContoller";
import { checkUser,loginUser } from "../middleware/checkUserExist";
// import {  verifyUserToken } from "../middleware/verifyToken";

const route=Router();
route.post("/login", loginUser);
// route.use(verifyUserToken);
route
  .route("/")
  .post(UserController.createController)
  .post(checkUser, UserController.createController)
  .get(UserController.getAllController);

route
  .route("/:id")
  .patch(UserController.updateOneController)
  .get(UserController.getOneController)
  .delete(UserController.deleteOneController);

export default route;
