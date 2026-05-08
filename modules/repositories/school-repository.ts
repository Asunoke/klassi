import { db } from "@/lib/db";
import { SchoolInput } from "../validations/school";

export class SchoolRepository {
    async create(data: SchoolInput) {
        return await db.school.create({
            data,
        });
    }

    async findById(id: string) {
        return await db.school.findUnique({
            where: { id },
        });
    }

    async findByDomain(domain: string) {
        return await db.school.findUnique({
            where: { domain },
        });
    }

    async update(id: string, data: Partial<SchoolInput>) {
        return await db.school.update({
            where: { id },
            data,
        });
    }

    async delete(id: string) {
        return await db.school.delete({
            where: { id },
        });
    }

    async findAll() {
        return await db.school.findMany({
            orderBy: { createdAt: "desc" },
        });
    }
}
