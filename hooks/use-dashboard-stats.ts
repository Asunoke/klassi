import { useQuery } from "@tanstack/react-query";

interface DashboardStats {
    totalStudents?: number;
    totalTeachers?: number;
    activeClasses?: number;
    attendanceRate?: number;
    myClasses?: number;
    pendingGrades?: number;
    classesToday?: number;
    currentGpa?: number;
    pendingAssignments?: number;
    children?: number;
    avgGpa?: number;
    avgAttendance?: number;
    newMessages?: number;
    changes?: any;
}

export function useDashboardStats(schoolId?: string | null, role: string = "admin", userId?: string) {
    return useQuery<DashboardStats>({
        queryKey: ["dashboard-stats", schoolId, role, userId],
        queryFn: async () => {
            if (!schoolId) throw new Error("No school ID provided");
            const url = `/api/dashboard/stats?schoolId=${schoolId}&role=${role}${userId ? `&userId=${userId}` : ''}`;
            const res = await fetch(url);
            if (!res.ok) throw new Error("Failed to fetch dashboard stats");
            return res.json();
        },
        enabled: !!schoolId,
    });
}
