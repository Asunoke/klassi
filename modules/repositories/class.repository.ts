import { db } from "@/lib/db";
import { ClassInput } from "../validations/class";

export class ClassRepository {
    async create(data: ClassInput) {
        return await db.class.create({
            data,
        });
    }

    async findById(id: string) {
        return await db.class.findUnique({
            where: { id },
            include: {
                students: true,
                courses: true,
            },
        });
    }

    async update(id: string, data: Partial<ClassInput>) {
        return await db.class.update({
            where: { id },
            data,
        });
    }

    async delete(id: string) {
        return await db.class.delete({
            where: { id },
        });
    }

    async findBySchool(schoolId: string) {
        return await db.class.findMany({
            where: { schoolId },
            orderBy: { name: "asc" },
        });
    }
}
