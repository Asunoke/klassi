import { z } from "zod";

export const courseSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    code: z.string().optional(),
    schoolId: z.string(),
    teacherId: z.string().optional(),
    classId: z.string().optional(),
});

export type CourseInput = z.infer<typeof courseSchema>;
