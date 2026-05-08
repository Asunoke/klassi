import { db } from "@/lib/db";
import { CourseInput } from "../validations/course";

export class CourseRepository {
    async create(data: CourseInput) {
        return await db.course.create({
            data,
        });
    }

    async findById(id: string) {
        return await db.course.findUnique({
            where: { id },
            include: {
                teacher: { include: { user: true } },
                class: true,
            },
        });
    }

    async update(id: string, data: Partial<CourseInput>) {
        return await db.course.update({
            where: { id },
            data,
        });
    }

    async delete(id: string) {
        return await db.course.delete({
            where: { id },
        });
    }

    async findBySchool(schoolId: string) {
        return await db.course.findMany({
            where: { schoolId },
            include: {
                teacher: { include: { user: true } },
                class: true,
            },
            orderBy: { name: "asc" },
        });
    }

    async findByClass(classId: string) {
        return await db.course.findMany({
            where: { classId },
            include: {
                teacher: { include: { user: true } },
            },
        });
    }
}
