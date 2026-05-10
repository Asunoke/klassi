import { z } from "zod";

export const teacherSchema = z.object({
    userId: z.string(),
    schoolId: z.string(),
    department: z.string().optional(),
});

export type TeacherInput = z.infer<typeof teacherSchema>;

export const createTeacherFormSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(8, "Please enter a valid phone number"),
    department: z.string().min(1, "Please select a department"),
});

export type CreateTeacherFormValues = z.infer<typeof createTeacherFormSchema>;
