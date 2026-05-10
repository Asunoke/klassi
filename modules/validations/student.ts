import { z } from "zod";

export const studentSchema = z.object({
    userId: z.string(),
    schoolId: z.string(),
    parentId: z.string().optional(),
    classId: z.string().optional(),
    rollNumber: z.string().optional(),
});

export type StudentInput = z.infer<typeof studentSchema>;

export const createStudentFormSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    classId: z.string().min(1, "Please select a class"),
    gender: z.string().min(1, "Please select a gender"),
    guardianEmail: z.string().email("Invalid email address").optional().or(z.literal("")),
});

export type CreateStudentFormValues = z.infer<typeof createStudentFormSchema>;

