import { z } from "zod";

export const gradeSchema = z.object({
    value: z.number().min(0),
    studentId: z.string(),
    courseId: z.string(),
    teacherId: z.string().optional(),
    remarks: z.string().optional(),
    date: z.string().optional().transform((val) => val ? new Date(val) : new Date()),
});

export type GradeInput = z.infer<typeof gradeSchema>;
