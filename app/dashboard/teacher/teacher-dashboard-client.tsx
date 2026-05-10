"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { ClassCard } from "@/components/dashboard/teacher/class-card"
import { TodaySchedule } from "@/components/dashboard/teacher/today-schedule"
import { StudentList } from "@/components/dashboard/teacher/student-list"
import { Assignments } from "@/components/dashboard/teacher/assignments"
import { Announcements } from "@/components/dashboard/announcements"
import { BookOpen, Users, FileCheck, Clock, Loader2 } from "lucide-react"
import { authClient } from "@/modules/auth/auth-client"
import { useDashboardStats } from "@/hooks/use-dashboard-stats"
import { DashboardSkeleton } from "@/components/dashboard/dashboard-skeleton"

const classes = [
  { name: "Grade 10A", subject: "Mathematics", students: 32, schedule: "Mon, Wed, Fri", room: "201", progress: 75 },
  { name: "Grade 9B", subject: "Mathematics", students: 30, schedule: "Tue, Thu", room: "105", progress: 68 },
  { name: "Grade 12", subject: "Advanced Calculus", students: 25, schedule: "Mon, Wed", room: "301", progress: 82 },
  { name: "Grade 11A", subject: "Mathematics", students: 28, schedule: "Tue, Thu, Fri", room: "203", progress: 60 },
]

export function TeacherDashboardClient() {
  const { data: session, isPending: isSessionPending } = authClient.useSession()
  
  const schoolId = (session?.user as any)?.schoolId as string | undefined;
  const userId = session?.user?.id;

  const { data: stats, isLoading: isStatsLoading } = useDashboardStats(schoolId, "teacher", userId)

  const myClasses = stats?.myClasses?.toLocaleString() || "..."
  const totalStudents = stats?.totalStudents?.toLocaleString() || "..."
  const pendingGrades = stats?.pendingGrades?.toLocaleString() || "..."
  const classesToday = stats?.classesToday?.toLocaleString() || "..."

  if (isSessionPending || isStatsLoading) {
    return <DashboardSkeleton role="teacher" title="Teacher Dashboard" />
  }

  return (
    <DashboardLayout role="teacher" title="Teacher Dashboard">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="My Classes"
          value={myClasses}
          icon={BookOpen}
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
        <StatCard
          title="Total Students"
          value={totalStudents}
          icon={Users}
          iconColor="text-secondary"
          iconBgColor="bg-secondary/10"
        />
        <StatCard
          title="Pending Grades"
          value={pendingGrades}
          change="Due soon"
          changeType="neutral"
          icon={FileCheck}
          iconColor="text-accent"
          iconBgColor="bg-accent/10"
        />
        <StatCard
          title="Classes Today"
          value={classesToday}
          icon={Clock}
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
      </div>

      {/* Classes Grid */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">My Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {classes.map((cls, index) => (
            <ClassCard key={index} {...cls} />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <TodaySchedule />
        </div>
        <div className="lg:col-span-2">
          <StudentList />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Assignments />
        <Announcements />
      </div>
    </DashboardLayout>
  )
}
