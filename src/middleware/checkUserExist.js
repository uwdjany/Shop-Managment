import userModel from "../models/user";
import { hashPassword, isPasswordMatching } from "../utils/hashPassword";
import Response from "../utils/response";
import { generateToken } from "../utils/token";
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

export const loginUser = async(req, res) =>{
    let {email, password} = req.body;
    const user = await userModel.findOne({email});
    if(!user){
        return Response.errorMessage(res, "user is not exist" , )
    }
    if(isPasswordMatching(password,user.password))
    user.password=null;
    const token = generateToken(user)
    return Response.successMessage(res, "Succe")


}