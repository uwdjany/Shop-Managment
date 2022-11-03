import UserModel from "../models/user";

class UserServices{

    static async createUser(req) {
        const user = await UserModel.create(req.body);
        return user;
      }

      // Get one by Id

  static async getOneById(req){
    const user = await UserModel.findById();
    return user;
  }

  //Delete one by id

  static async deleteUser(req) {
    const user = await UserModel.findByIdAndDelete({ _id: req.params.id });
    return user;
  }
 //Update By Id

 static async updateUser(req) {
    await UserModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
    const user = UserModel.findById({ _id: req.params.id });
    return user;
  }


}


export default UserServices