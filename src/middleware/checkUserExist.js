import userModel from "../models/user";
import { hashPassword, isPasswordMatching } from "../utils/hashPassword";
import Response from "../utils/response";
//import status from "http-status"

export const CheckUser = async (req, res, next) => {
  let { email, password } = req.body;
  const user = await userModel.find({ email });

  if (!user) {
    req.body.password = hashPassword(password);
    next();
  }
  return Response.errorMessage(res,"user is already exist",)
};
