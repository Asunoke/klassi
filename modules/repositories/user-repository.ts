import { db } from "@/lib/db";
import { UserInput } from "../validations/user";

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
            },
        });
    }

    async create(data: UserInput) {
        return await db.user.create({
            data,
        });
    }

    async update(id: string, data: Partial<UserInput>) {
        return await db.user.update({
            where: { id },
            data,
        });
    }

    async findBySchool(schoolId: string) {
        return await db.user.findMany({
            where: { schoolId },
            orderBy: { createdAt: "desc" },
        });
    }
}
