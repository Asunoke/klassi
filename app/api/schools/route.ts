import { NextResponse } from "next/server";
import { RegisterSchoolUseCase } from "@/modules/use-cases/register-school.use-case";
import { auth } from "@/modules/auth/auth";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const useCase = new RegisterSchoolUseCase();
        const result = await useCase.execute(body);
        return NextResponse.json(result, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function GET(request: Request) {
    const session = await auth.api.getSession({
        headers: request.headers,
    });

    if (!session || !["SUPER_ADMIN", "ADMIN"].includes(session.user.role)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Logic to list schools (Super Admin only usually)
    return NextResponse.json({ message: "Schools list" });
}
