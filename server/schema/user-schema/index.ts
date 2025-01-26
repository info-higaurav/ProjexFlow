import {Schema , Document, model} from 'mongoose'

enum UserRole {
    admin = "admin",
    user = "user",
    manager = "manager"
    
}
interface IUser extends Document {
    profile : {
        firstName : string
        lastName : string
    }
    auth:{
        email : string  
        password : string
        role : UserRole
        accessToken? : string
        refreshToken? : string
    }
}
const userSchema = new Schema <IUser> ({
    profile : {
        firstName:{
            type:String,
            trim : true
        },
        lastName:{
            type:String,
            trim : true
        }
    },
    auth:{
        email:{
            type:String,
            unique : true,
            required : true,
            trim: true
        },
        role:{
            type: String,
            required:true,
            enum : Object.values(UserRole),
            default : "admin"
        },
        password:{
            type:String,
            required : true
        },
        accessToken:{
            type:String,
        },
        refreshToken:{
            type:String
        }
    }
},{
    timestamps : true
})

const User = model <IUser>("Users", userSchema)

export {User, IUser , UserRole}