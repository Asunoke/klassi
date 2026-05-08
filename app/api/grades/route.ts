import { NextResponse } from "next/server";
import { GradeService } from "@/modules/services/grade.service";
import { gradeSchema } from "@/modules/validations/grade";

const gradeService = new GradeService();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = gradeSchema.parse(body);
        const result = await gradeService.createGrade(validatedData);
        return NextResponse.json(result, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const studentId = url.searchParams.get("studentId");
        const courseId = url.searchParams.get("courseId");
        
        if (studentId) {
            const result = await gradeService.getGradesByStudent(studentId);
            return NextResponse.json(result);
        }

        if (courseId) {
            const result = await gradeService.getGradesByCourse(courseId);
            return NextResponse.json(result);
        }

        return NextResponse.json({ error: "studentId or courseId is required" }, { status: 400 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
