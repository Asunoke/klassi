import { db } from "@/lib/db";
import { GradeInput } from "../validations/grade";

export class GradeRepository {
    async create(data: GradeInput) {
        return await db.grade.create({
            data,
        });
    }

    async findById(id: string) {
        return await db.grade.findUnique({
            where: { id },
            include: {
                student: { include: { user: true } },
                course: true,
            },
        });
    }

    async update(id: string, data: Partial<GradeInput>) {
        return await db.grade.update({
            where: { id },
            data,
        });
    }

    async delete(id: string) {
        return await db.grade.delete({
            where: { id },
        });
    }

    async findByStudent(studentId: string) {
        return await db.grade.findMany({
            where: { studentId },
            include: {
                course: true,
                student: true
            },
            orderBy: { date: "desc" },
        });
    }

    async findByCourse(courseId: string) {
        return await db.grade.findMany({
            where: { courseId },
            include: {
                student: { include: { user: true } },
            },
            orderBy: { date: "desc" },
        });
    }
}
