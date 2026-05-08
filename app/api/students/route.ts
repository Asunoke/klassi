import { NextResponse } from "next/server";
import { StudentService } from "@/modules/services/student.service";
import { studentSchema } from "@/modules/validations/student";

const studentService = new StudentService();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = studentSchema.parse(body);
        const result = await studentService.createStudent(validatedData);
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

        const result = await studentService.getStudentsBySchool(schoolId);
        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
