import { NextResponse } from "next/server";
import { TeacherService } from "@/modules/services/teacher.service";
import { teacherSchema } from "@/modules/validations/teacher";

const teacherService = new TeacherService();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = teacherSchema.parse(body);
        const result = await teacherService.createTeacher(validatedData);
        return NextResponse.json(result, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
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
