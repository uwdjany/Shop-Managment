import SalesModel from "../models/sales";

class SalesService{


      //create sales

  static async createSales(req) {
    const sales = await SalesModel.create(req.body);
    return sales;
  }
    //Get All Sales

    static async getAllSales(req) {
        const sales = await SalesModel.find();
        return sales;
      }
      // Get one by Id

  static async getOneById(req){
    const sales = await SalesModel.findById();
    return sales;
  }
  
  //Delete one by id

  static async deleteSales(req) {
    const sales = await SalesModel.findByIdAndDelete({ _id: req.params.id });
    return sales;
  }

    //Update By Id

    static async updateSales(req) {
        await SalesModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
        const sales = SalesModel.findOne({ _id: req.params.id });
        return sales;
      }
}

export default SalesService