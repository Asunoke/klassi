import { z } from "zod";

export const teacherSchema = z.object({
    userId: z.string(),
    schoolId: z.string(),
    bio: z.string().optional(),
    subjects: z.array(z.string()).default([]),
});

export type TeacherInput = z.infer<typeof teacherSchema>;
