import { NextResponse } from "next/server";
import { CourseService } from "@/modules/services/course.service";
import { courseSchema } from "@/modules/validations/course";

const courseService = new CourseService();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = courseSchema.parse(body);
        const result = await courseService.createCourse(validatedData);
        return NextResponse.json(result, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const schoolId = url.searchParams.get("schoolId");
        const classId = url.searchParams.get("classId");
        
        if (classId) {
            const result = await courseService.getCoursesByClass(classId);
            return NextResponse.json(result);
        }

        if (!schoolId) {
            return NextResponse.json({ error: "schoolId or classId is required" }, { status: 400 });
        }

        const result = await courseService.getCoursesBySchool(schoolId);
        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
