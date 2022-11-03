import SalesService from "../services/salesServices";
import Response from "../utils/response";

class SalesController{
 //create sale controller

 static async createSales(req, res) {
    const sales = await SalesService.createSales(req);
    if (!sales) {
      return Response.errorMessage(res, "Not Found", 400);
    }

    return Response.successMessage(res, "Successful Created", sales, 200);
  }

    // Get All purchase Controller

  static async getAllSales(req, res) {
    const sales = await SalesService.getAllSales(req);
    if (!sales) {
      return Response.errorMessage(res, "Not Found", 400);
    }
    return Response.successMessage(res, "Successfully Retrieve", sales, 200);
  }

  static async getOneById(req, res) {
    const sales = await SalesService.getOneById(req);
    if (!sales){
      return Response.errorMessage(res, "Not Found", 400);
    }
    return Response.successMessage(res, "Successfully Retrieve", sales, 200);
  }
  static async deleteSales(req, res) {
    const sales = await SalesService.deleteSales(req);
    if (!sales) {
      return Response.errorMessage(res, "Not Found", 400);
    }
    return Response.successMessage(res, "Successfully Retrieve", sales, 200);
  }

  static async updateSales (req, res) {
    const sales = await PurchaseServise.updateSales(req);
    if (!sales) {
      return Response.errorMessage(res, "Not Found", 400);
    }
    return Response.successMessage(res, "Successfully Retrieve", sales, 200);
  }

}

export default SalesController;