import z from 'zod'

const today = new Date();
today.setUTCHours(0, 0, 0, 0);

const taskValidation = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    notes: z.string().min(1, "Notes are required"),
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
    assignor: z.string().min(1, "Assignor is required"),
    assignee: z.string().min(1, "Assignee is required"),
    projectId: z.string().min(1, "Project ID is required"),
    tags: z.array(z.string()).optional()
})

export default taskValidation;