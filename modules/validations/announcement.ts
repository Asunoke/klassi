import { z } from "zod";

export const announcementSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters"),
    content: z.string().min(5, "Content must be at least 5 characters"),
    schoolId: z.string(),
    authorId: z.string().optional(),
});

export type AnnouncementInput = z.infer<typeof announcementSchema>;
