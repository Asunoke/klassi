import { db } from "@/lib/db";
import { TeacherInput } from "../validations/teacher";

export class TeacherRepository {
    async create(data: TeacherInput) {
        return await db.teacher.create({
            data,
        });
    }

    async findById(id: string) {
        return await db.teacher.findUnique({
            where: { id },
            include: {
                user: true,
                courses: true,
            },
        });
    }

    async findByUserId(userId: string) {
        return await db.teacher.findUnique({
            where: { userId },
            include: {
                user: true,
            },
        });
    }

    async update(id: string, data: Partial<TeacherInput>) {
        return await db.teacher.update({
            where: { id },
            data,
        });
    }

    async delete(id: string) {
        return await db.teacher.delete({
            where: { id },
        });
    }

    async findBySchool(schoolId: string) {
        return await db.teacher.findMany({
            where: { schoolId },
            include: {
                user: true,
            },
            orderBy: { createdAt: "desc" },
        });
    }
}
