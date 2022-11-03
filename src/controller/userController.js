import UserServices from "../services/userServices";
import Response from "../utils/response";
class UserController{
//create user controller
    static async createUser(req, res) {
        const user = await UserServices.createUser(req);
        if (!user) {
          return Response.errorMessage(res, "Not Found", 400);
        }
    
        return Response.successMessage(res, "Successful Created", user, 200);
      }

      static async getOneById(req, res) {
        const user = await UserServices.getOneById(req);
        if (!user) {
          return Response.errorMessage(res, "Not Found", 400);
        }
    
        return Response.successMessage(res, "Successful Created", user, 200);
      }

      static async deleteUser(req, res) {
        const user = await UserServices.getOneById(req);
        if (!user) {
          return Response.errorMessage(res, "Not Found", 400);
        }
    
        return Response.successMessage(res, "Successful Created", user, 200);
      }
      static async updateUser(req, res) {
        const user = await UserServices.getOneById(req);
        if (!user) {
          return Response.errorMessage(res, "Not Found", 400);
        }
    
        return Response.successMessage(res, "Successful Created", user, 200);
      }

}

export default UserController;