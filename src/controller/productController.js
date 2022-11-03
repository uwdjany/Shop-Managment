import ProductService from "../services/productServices";
import Response from "../utils/response";
class ProductController {
  //create product controller

  static async createProduct(req, res) {
    const product = await ProductService.createProduct(req);
    if (!product) {
      return Response.errorMessage(res, "Not Found", 400);
    }

    return Response.successMessage(res, "Successful Created", product, 200);
  }

  // Get All course Controller

  static async getAllProduct(req, res) {
    const product = await ProductService.getAllProduct(req);
    if (!product) {
      return Response.errorMessage(res, "Not Found", 400);
    }
    return Response.successMessage(res, "Successfully Retrieve", product, 200);
  }

  // get one by id

  static async getOneById(req, res) {
    const product = await ProductService.getOneById(req);
    if (!product) {
      return Response.errorMessage(res, "Not Found", 400);
    }
    return Response.successMessage(res, "Successfully Retrieve", product, 200);
  }

  //delete

  static async deleteProduct(req, res) {
    const product = await ProductService.deleteProduct(req);
    if (!product) {
      return Response.errorMessage(res, "Not Found", 400);
    }
    return Response.successMessage(res, "Successfully Retrieve", product, 200);
  }

  //update

  static async updateProduct(req, res) {
    const product = await ProductService.updateProduct(req);
    if (!product) {
      return Response.errorMessage(res, "Not Found", 400);
    }
    return Response.successMessage(res, "Successfully Retrieve", product, 200);
  }
}
export default ProductController;