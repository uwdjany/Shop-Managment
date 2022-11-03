import PurchaseServise from "../services/purchaseServices";
import Response from "../utils/response";

class PurchaseController{
  //create product controller

  static async createPurchase(req, res) {
    const purchase = await PurchaseServise.createPurchase(req);
    if (!purchase) {
      return Response.errorMessage(res, "Not Found", 400);
    }

    return Response.successMessage(res, "Successful Created", purchase, 200);
  }

  // Get All purchase Controller

  static async getAllPurchase(req, res) {
    const purchase = await PurchaseServise.getAllPurchase(req);
    if (!purchase) {
      return Response.errorMessage(res, "Not Found", 400);
    }
    return Response.successMessage(res, "Successfully Retrieve", purchase, 200);
  }

  
  static async getOneById(req, res) {
    const purchase = await PurchaseServise.getOneById(req);
    if (!purchase) {
      return Response.errorMessage(res, "Not Found", 400);
    }
    return Response.successMessage(res, "Successfully Retrieve", purchase, 200);
  }

  
  static async deletePurchase(req, res) {
    const purchase = await PurchaseServise.deletePurchase(req);
    if (!purchase) {
      return Response.errorMessage(res, "Not Found", 400);
    }
    return Response.successMessage(res, "Successfully Retrieve", purchase, 200);
  }

  static async updatePurchase(req, res) {
    const purchase = await PurchaseServise.updatePurchase(req);
    if (!purchase) {
      return Response.errorMessage(res, "Not Found", 400);
    }
    return Response.successMessage(res, "Successfully Retrieve", purchase, 200);
  }
}


 export default PurchaseController;