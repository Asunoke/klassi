import { NextResponse } from "next/server";
import { AnnouncementService } from "@/modules/services/announcement.service";
import { announcementSchema } from "@/modules/validations/announcement";

const announcementService = new AnnouncementService();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = announcementSchema.parse(body);
        const result = await announcementService.createAnnouncement(validatedData);
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

        const result = await announcementService.getAnnouncementsBySchool(schoolId);
        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
