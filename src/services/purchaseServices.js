import PurchaseModel from "../models/purchase";

class PurchaseServise {
  //create purchase

  static async createPurchase(req) {
    const purchase = await PurchaseModel.create(req.body);
    return purchase;
  }
  //Get All Product

  static async getAllPurchase(req) {
    const purchase = await PurchaseModel.find();
    return purchase;
  }

  // Get one by Id

  static async getOneById(req) {
    const purchase = await PurchaseModel.findById();
    return purchase;
  }

  //Delete one by id

  static async deletePurchase(req) {
    const purchase = await PurchaseModel.deleteOne({ _id: req.params.id });
    return purchase;
  }

  //Update By Id

  static async updatePurchase(req) {
    await PurchaseModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
    const purchase = PurchaseModel.findOne({ _id: req.params.id });
    return purchase;
  }
}

export default PurchaseServise;
