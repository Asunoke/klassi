import { db } from "@/lib/db";
import { AnnouncementInput } from "../validations/announcement";

export class AnnouncementRepository {
    async create(data: AnnouncementInput) {
        return await db.announcement.create({
            data,
        });
    }

    async findById(id: string) {
        return await db.announcement.findUnique({
            where: { id },
        });
    }

    async update(id: string, data: Partial<AnnouncementInput>) {
        return await db.announcement.update({
            where: { id },
            data,
        });
    }

    async delete(id: string) {
        return await db.announcement.delete({
            where: { id },
        });
    }

    async findBySchool(schoolId: string) {
        return await db.announcement.findMany({
            where: { schoolId },
            orderBy: { createdAt: "desc" },
        });
    }
}
