import { NextResponse } from "next/server";
import { TeacherService } from "@/modules/services/teacher.service";
import { createTeacherFormSchema } from "@/modules/validations/teacher";
import { auth } from "@/modules/auth/auth";
import { db } from "@/lib/db";

const teacherService = new TeacherService();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        if (!body.schoolId) {
            return NextResponse.json({ error: "schoolId is required" }, { status: 400 });
        }

        const validatedData = createTeacherFormSchema.parse(body);
        
        // 1. Check if user already exists
        const existingUser = await db.user.findUnique({
            where: { email: validatedData.email }
        });
        
        if (existingUser) {
            return NextResponse.json({ error: "A user with this email already exists" }, { status: 400 });
        }

        // 2. Generate a default password
        const defaultPassword = "Teacher@123!";

        // 3. Create User using Better Auth
        let newUser;
        try {
            const authResponse = await auth.api.signUpEmail({
                body: {
                    email: validatedData.email,
                    password: defaultPassword,
                    name: `${validatedData.firstName} ${validatedData.lastName}`,
                    role: "TEACHER",
                    schoolId: body.schoolId,
                }
            });
            
            if (authResponse && authResponse.user) {
                newUser = authResponse.user;
            } else {
                newUser = await db.user.findUnique({ where: { email: validatedData.email } });
            }
            
            if (!newUser) {
                throw new Error("Failed to create user account");
            }
        } catch (err: any) {
            return NextResponse.json({ error: err.message || "Error creating user account" }, { status: 500 });
        }

        // 4. Create Teacher record
        const teacherResult = await teacherService.createTeacher({
            userId: newUser.id,
            schoolId: body.schoolId,
            department: validatedData.department,
        });

        return NextResponse.json({ user: newUser, teacher: teacherResult }, { status: 201 });
    } catch (error: any) {
        if (error.name === "ZodError") {
            return NextResponse.json({ error: "Validation failed", details: error.errors }, { status: 400 });
        }
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const schoolId = url.searchParams.get("schoolId");
        
        if (!schoolId) {
            return NextResponse.json({ error: "schoolId is required" }, { status: 400 });
        }

        const result = await teacherService.getTeachersBySchool(schoolId);
        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
