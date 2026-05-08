import { db } from "@/lib/db";
import { StudentInput } from "../validations/student";

export class StudentRepository {
    async create(data: StudentInput) {
        return await db.student.create({
            data,
        });
    }

    async findById(id: string) {
        return await db.student.findUnique({
            where: { id },
            include: {
                user: true,
                parent: { include: { user: true } },
                class: true,
            },
        });
    }

    async findByUserId(userId: string) {
        return await db.student.findUnique({
            where: { userId },
            include: {
                user: true,
                class: true,
            },
        });
    }

    async update(id: string, data: Partial<StudentInput>) {
        return await db.student.update({
            where: { id },
            data,
        });
    }

    async delete(id: string) {
        return await db.student.delete({
            where: { id },
        });
    }

    async findBySchool(schoolId: string) {
        return await db.student.findMany({
            where: { schoolId },
            include: {
                user: true,
                class: true,
            },
            orderBy: { createdAt: "desc" },
        });
    }
}
