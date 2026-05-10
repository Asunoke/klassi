import { NextResponse } from "next/server";
import { StudentService } from "@/modules/services/student.service";
import { createStudentFormSchema } from "@/modules/validations/student";
import { auth } from "@/modules/auth/auth";
import { db } from "@/lib/db";

const studentService = new StudentService();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Ensure schoolId is present in body
        if (!body.schoolId) {
            return NextResponse.json({ error: "schoolId is required" }, { status: 400 });
        }

        const validatedData = createStudentFormSchema.parse(body);
        
        // 1. Check if user already exists
        const existingUser = await db.user.findUnique({
            where: { email: validatedData.email }
        });
        
        if (existingUser) {
            return NextResponse.json({ error: "A user with this email already exists" }, { status: 400 });
        }

        // 2. Generate a default password or let them reset it later.
        const defaultPassword = "Student@123!";

        // 3. Create User using Better Auth
        // Server-side call to signUpEmail
        let newUser;
        try {
            // Using BetterAuth to create the user with role and schoolId
            const authResponse = await auth.api.signUpEmail({
                body: {
                    email: validatedData.email,
                    password: defaultPassword,
                    name: `${validatedData.firstName} ${validatedData.lastName}`,
                    role: "STUDENT",
                    schoolId: body.schoolId,
                }
            });
            
            // The response typically contains the user object or session.
            // If the user object isn't directly returned, we can fetch it.
            if (authResponse && authResponse.user) {
                newUser = authResponse.user;
            } else {
                // Fallback: fetch the user we just created
                newUser = await db.user.findUnique({ where: { email: validatedData.email } });
            }
            
            if (!newUser) {
                throw new Error("Failed to create user account");
            }
        } catch (err: any) {
            return NextResponse.json({ error: err.message || "Error creating user account" }, { status: 500 });
        }

        // 4. Create Student record linked to User
        const studentResult = await studentService.createStudent({
            userId: newUser.id,
            schoolId: body.schoolId,
            classId: validatedData.classId,
            // Roll number can be generated or assigned later
        });

        return NextResponse.json({ user: newUser, student: studentResult }, { status: 201 });
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

        const result = await studentService.getStudentsBySchool(schoolId);
        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
