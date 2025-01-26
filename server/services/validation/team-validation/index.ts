import z from 'zod'

const teamValidate = z.object({
    name:z.string({
        required_error:"Team name is required",
        invalid_type_error:"Valid team name is required"
    })
    .min(3, "Team name has atleast 3 character"),
    description:z.string({
        required_error:"Team description is required",
        invalid_type_error:"Valid team description is required"
    })
    .min(3, "Team description has atleast 3 character")
    .max(500, "Team description cannot exceed 500 characters"),

    members:z.array(z.string({
        required_error:"Team members are required",
        invalid_type_error:"Valid team members are required"
    })).min(1, "Team must have atleast 1 member"),

    managedBy:z.string({
        required_error:"Team Manager is required",
        invalid_type_error:"Valid team manager is required"
    })
    .nonempty("Team manager cannot be empty")
})

export default teamValidate;