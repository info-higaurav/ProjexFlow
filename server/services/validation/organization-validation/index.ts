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

    subscription :z.object({
        planId : z.string({
            required_error : "Plan is required",
            invalid_type_error : "Plan must be string"
        }),
        startDate : z.string({
            required_error : "Start date is required",
            invalid_type_error : "Start date must be date"
        }),
        endDate : z.string({
            required_error : "End date is required",
            invalid_type_error : "End date must be date"
        }),
        status: z.string({
            required_error : "Status is required",
            invalid_type_error : "Status must be string"
        }),
        billingCycle: z.string({})
    })
    ,
    createdBy : z.string({
        required_error:"Crator id is required",
        invalid_type_error : "Creator id must be string"
    }),

})

export {orgValidation}