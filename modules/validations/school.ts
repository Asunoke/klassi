import { z } from "zod";

export const schoolSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    domain: z.string().optional(),
    logo: z.string().url().optional().or(z.literal("")),
    address: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().email().optional().or(z.literal("")),
});

export type SchoolInput = z.infer<typeof schoolSchema>;
