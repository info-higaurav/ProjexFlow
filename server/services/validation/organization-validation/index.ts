import z from 'zod'

const orgValidation = z.object({
    name : z.string({
        required_error:"Organization is required",
        invalid_type_error : "Organization name must be string"
    })
    .min(1,"Organization is required"),

    description:z.string({
        required_error:"Description is required",
        invalid_type_error : "Description must be string"
    })
    .min(1, "Description is required"),

    subscription : z.string({
        required_error:"Organization is required",
        invalid_type_error : "Organization name must be string"
    })
    .optional()
    ,
    createdBy : z.string({
        required_error:"Crator id is required",
        invalid_type_error : "Creator id must be string"
    }),

})

export {orgValidation}