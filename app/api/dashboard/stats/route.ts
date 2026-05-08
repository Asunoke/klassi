import { NextResponse } from "next/server";
import { DashboardService } from "@/modules/services/dashboard.service";

const dashboardService = new DashboardService();

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const schoolId = url.searchParams.get("schoolId");
        const role = url.searchParams.get("role") || "admin";
        const userId = url.searchParams.get("userId");
        
        if (!schoolId) {
            return NextResponse.json({ error: "schoolId is required" }, { status: 400 });
        }

        let result;
        if (role === "teacher" && userId) {
            result = await dashboardService.getTeacherStats(schoolId, userId);
        } else if (role === "student" && userId) {
            result = await dashboardService.getStudentStats(schoolId, userId);
        } else if (role === "parent" && userId) {
            result = await dashboardService.getParentStats(schoolId, userId);
        } else {
            result = await dashboardService.getAdminStats(schoolId);
        }
        
        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
