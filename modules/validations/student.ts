import { z } from "zod";

export const studentSchema = z.object({
    userId: z.string(),
    schoolId: z.string(),
    parentId: z.string().optional(),
    classId: z.string().optional(),
    rollNumber: z.string().optional(),
});

export type StudentInput = z.infer<typeof studentSchema>;
