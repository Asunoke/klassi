import { z } from "zod";

export const userRoleSchema = z.enum(["SUPER_ADMIN", "ADMIN", "TEACHER", "STUDENT", "PARENT"]);

export const userSchema = z.object({
    email: z.string().email(),
    name: z.string().min(2).optional(),
    role: userRoleSchema.default("STUDENT"),
    schoolId: z.string(),
});

export type UserInput = z.infer<typeof userSchema>;
