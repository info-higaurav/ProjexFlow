import { IUser , User } from "../../schema/users-schema";
import { signInPayloadValidation, signUpPayloadValidation } from "../validation/user-validations";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
class UserServices {
   async addUser (payload:any){
    const user = await User.create(payload);
    const userId = user?._id;
    const response = await User.findById(userId).select("-auth.password")
    return response;
   }

   async checkUser (email:string){
    return await User.find({"auth.email":email})

   }
   
   async getUser (id: string) {
   return await User.findById(id);
   }

   async deleteUser (id:string){
    return await User.findByIdAndDelete(id);
   }

   async verifySignUpPayload (payload:IUser){
      return signUpPayloadValidation.parse(payload);
   }

   async verifySignInPayload (payload:{email:string,password:string}){
      return signInPayloadValidation.parse(payload);
   }


   async generateAccessToken (id:string){
      const accessToken = jwt.sign({_id:id}, process.env.ADMIN_JWT_SECRECT_KEY as string , {expiresIn:'1d'})
      await User.findByIdAndUpdate(id, { "auth.accessToken": accessToken }, { runValidators: false });
      return accessToken; 
   }

   async generateRefreshToken (id:string){
      const refreshToken = jwt.sign({_id:id}, process.env.ADMIN_JWT_SECRECT_KEY as string,{expiresIn:'30d'});
      await User.findByIdAndUpdate(id, { "auth.refreshToken":refreshToken }, { runValidators: false });
      return refreshToken;
   }

   async hashPassword (password:string){
      const hashedPassword = await bcrypt.hash(password, 10)
      return hashedPassword;
   }

   async verifyHashPassword (password:string , hashPass:string){
      const hashedPassword = await bcrypt.compare(password, hashPass)
      return hashedPassword;
   }
}

export default UserServices;