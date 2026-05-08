import { z } from "zod";

export const classSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    schoolId: z.string(),
});

export type ClassInput = z.infer<typeof classSchema>;
