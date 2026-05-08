import { db } from "@/lib/db";

export class DashboardService {
    async getAdminStats(schoolId: string) {
        const [totalStudents, totalTeachers, activeClasses] = await Promise.all([
            db.student.count({ where: { schoolId } }),
            db.teacher.count({ where: { schoolId } }),
            db.class.count({ where: { schoolId } }),
        ]);

        return {
            totalStudents,
            totalTeachers,
            activeClasses,
            attendanceRate: 94.2,
            changes: { students: "+12%", teachers: "+8%", classes: "+5%", attendance: "+2.1%" }
        };
    }

    async getTeacherStats(schoolId: string, userId: string) {
        // Find teacher by userId
        const teacher = await db.teacher.findUnique({ where: { userId } });
        if (!teacher) throw new Error("Teacher not found");

        const [myClasses, myStudents] = await Promise.all([
            db.course.count({ where: { teacherId: teacher.id } }),
            // simplified: get count of students in those courses (requires complex join, mocking for now)
            Promise.resolve(115) 
        ]);

        return {
            myClasses,
            totalStudents: myStudents,
            pendingGrades: 28, // Mock
            classesToday: 5, // Mock
        };
    }

    async getStudentStats(schoolId: string, userId: string) {
        return {
            currentGpa: 3.8,
            classesToday: 5,
            pendingAssignments: 3,
            attendanceRate: 91.4,
            changes: { gpa: "+0.2", attendance: "+1.2%" }
        };
    }

    async getParentStats(schoolId: string, userId: string) {
        return {
            children: 2,
            avgGpa: 3.65,
            avgAttendance: 93.3,
            newMessages: 2,
            changes: { gpa: "+0.15", attendance: "+1.5%" }
        };
    }
}
