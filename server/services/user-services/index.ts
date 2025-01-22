import { IUser , User } from "../../schema/users-schema";

class UserServices {
   async addUser (payload:IUser){
    return await User.create(payload);
   }

   async checkUser (email:string){
    return await User.find({email:email})

   }
   
   async getUser (id: string) {
   return await User.findById(id);
   }

   async deleteUser (id:string){
    return await User.findByIdAndDelete(id);
   }
}

export default UserServices;