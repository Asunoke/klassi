import { NextResponse } from "next/server";
import { ClassService } from "@/modules/services/class.service";
import { classSchema } from "@/modules/validations/class";

const classService = new ClassService();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = classSchema.parse(body);
        const result = await classService.createClass(validatedData);
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

        const result = await classService.getClassesBySchool(schoolId);
        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
