import z from 'zod'
import { UserRole } from '../../../schema/users-schema'

const signUpPayloadValidation = z.object({
    profile:z.object({
        firstName : z.string({
            invalid_type_error:"first name must be string"
        }),
        lastName : z.string({
            invalid_type_error:"last name must be string"
        })
    }),
    auth:z.object({
        email : z.string({
            required_error:"Email is required",
            invalid_type_error:"Email must be a string"
        })
        .email({
           message:"Valid email is required"
        }),

        password: z.string({
            required_error: "Password is required",
            invalid_type_error: "Password must be a string",
        })
        .min(8, "Password length must be 8 character")
        .max(72, "Password length must be less than 72 character")
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
        .regex(/\d/, { message: "Password must contain at least one numeric character." })
        .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character (@, $, !, %, *, ?, &)." }),

        role: z.enum([UserRole.admin, UserRole.user],{
            required_error:"User role is required",
            invalid_type_error:"User role must be either admin or user"
        })
    })
})

export {signUpPayloadValidation}