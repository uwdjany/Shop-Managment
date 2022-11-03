import ProductModel from "../models/product";

class ProductService{
    //create product

    static async createProduct(req){
        const product = await ProductModel.create(req.body)
        return product;
    }

    //Get All Product

    static async getAllProduct(req){
        const product = await ProductModel.find()
        return product;
    }

    // Get one by Id

    static async getOneById(req){
        const product = await ProductModel.findById()
        return product;
    }

    //Delete one by id

    static async deleteProduct(req){
        const product = await ProductModel.deleteOne({_id:req.params.id});
        return product;
    }

    //Update By Id

    static async updateProduct(req){
        await ProductModel.findByIdAndUpdate({_id:req.params.id},req.body);
        const product = ProductModel.findOne({_id:req.params.id});
        return product;
    }
}


export default ProductService;