import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";

export class UserRepository {
    async findByEmail(email: string) {
        return await db.user.findUnique({
            where: { email },
            include: {
                school: true,
                teacher: true,
                student: true,
                parent: true,
            },
        });
    }

    async findById(id: string) {
        return await db.user.findUnique({
            where: { id },
            include: {
                school: true,
                teacher: true,
                student: true,
                parent: true,
            },
        });
    }

    async create(data: {
        email: string;
        name?: string;
        role: UserRole;
        schoolId: string;
    }) {
        return await db.user.create({
            data,
        });
    }

    async updateRole(id: string, role: UserRole) {
        return await db.user.update({
            where: { id },
            data: { role },
        });
    }

    async findBySchool(schoolId: string) {
        return await db.user.findMany({
            where: { schoolId },
        });
    }
}
