import { z } from 'zod';

const today = new Date();
today.setUTCHours(0, 0, 0, 0);

const validateProject = z.object({
  name: z.string({
    required_error: "Project name is required",
    invalid_type_error: "Project name must be a string"
  })
  .trim()
  .min(3, "Project name must be at least 3 characters long")
  .max(100, "Project name cannot exceed 100 characters")
  .nonempty("Project name cannot be empty"),

  description: z.string({
    required_error: "Project description is required", 
    invalid_type_error: "Project description must be a string"
  })
  .trim()
  .min(10, "Project description must be at least 10 characters long")
  .max(500, "Project description cannot exceed 500 characters")
  .nonempty("Project description cannot be empty"),

  startDate: z.string()
    .nonempty("Start date cannot be empty")
    .refine(
      (date: string) => {
        const parsedDate = new Date(date);
        return !isNaN(parsedDate.getTime());
      }, 
      { message: "Start date must be a valid ISO date string." }
    )
    .refine(
      (date: string) => new Date(date) >= today, 
      { message: "Start date cannot be in the past." }
    ),

  dueDate: z.string()
    .nonempty("Due date cannot be empty")
    .refine(
      (date: string) => {
        const parsedDate = new Date(date);
        return !isNaN(parsedDate.getTime());
      }, 
      { message: "Due date must be a valid ISO date string." }
    )
    .refine(
      (date: string) => new Date(date) >= today, 
      { message: "Due date cannot be in the past." }
    ),

  organization: z.string({
    required_error: "Organization is required",
    invalid_type_error: "Organization must be a string"
  })
  .nonempty("Organization cannot be empty"),

  managedBy: z.string({
    required_error: "Managed by is required",
    invalid_type_error: "Managed by must be a string"
  })
  .nonempty("Managed by cannot be empty"),
  createdBy: z.string({
    required_error: "Created by is required",
    invalid_type_error: "Created by must be a string"
  })
  .nonempty("Created by cannot be empty"),

  team: z.array(z.object({})).optional()
})
.superRefine((data, ctx) => {
  const startDate = new Date(data.startDate);
  const dueDate = new Date(data.dueDate);
  if (dueDate < startDate) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Due date must be on or after start date.",
      path: ["dueDate"],
    });
  }
})

export default validateProject;