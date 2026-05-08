"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { GradesOverview } from "@/components/dashboard/student/grades-overview"
import { ClassSchedule } from "@/components/dashboard/student/class-schedule"
import { PendingAssignments } from "@/components/dashboard/student/pending-assignments"
import { AttendanceSummary } from "@/components/dashboard/student/attendance-summary"
import { Announcements } from "@/components/dashboard/announcements"
import { BookOpen, FileText, Award, Clock, Loader2 } from "lucide-react"
import { authClient } from "@/modules/auth/auth-client"
import { useDashboardStats } from "@/hooks/use-dashboard-stats"

export function StudentDashboardClient() {
  const { data: session, isPending: isSessionPending } = authClient.useSession()
  
  const schoolId = (session?.user as any)?.schoolId as string | undefined;
  const userId = session?.user?.id;
  const userName = session?.user?.name || "Student";

  const { data: stats, isLoading: isStatsLoading } = useDashboardStats(schoolId, "student", userId)

  const currentGpa = stats?.currentGpa?.toLocaleString() || "..."
  const classesToday = stats?.classesToday?.toLocaleString() || "..."
  const pendingAssignments = stats?.pendingAssignments?.toLocaleString() || "..."
  const attendanceRate = stats?.attendanceRate ? `${stats.attendanceRate}%` : "..."

  if (isSessionPending) {
    return (
      <DashboardLayout role="student" title="Student Dashboard">
        <div className="flex items-center justify-center h-[50vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout role="student" title="Student Dashboard">
      {/* Welcome Section */}
      <div className="mb-6 p-6 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-1">Welcome back, {userName.split(' ')[0]}!</h2>
        <p className="text-muted-foreground">
          You have {stats?.classesToday || 0} classes today and {stats?.pendingAssignments || 0} pending assignments. Keep up the great work!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Current GPA"
          value={currentGpa}
          change={stats?.changes?.gpa || "0"}
          changeType="positive"
          icon={Award}
          iconColor="text-secondary"
          iconBgColor="bg-secondary/10"
        />
        <StatCard
          title="Classes Today"
          value={classesToday}
          icon={BookOpen}
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
        <StatCard
          title="Pending Assignments"
          value={pendingAssignments}
          change="Due soon"
          changeType="neutral"
          icon={FileText}
          iconColor="text-accent"
          iconBgColor="bg-accent/10"
        />
        <StatCard
          title="Attendance Rate"
          value={attendanceRate}
          change={stats?.changes?.attendance || "0%"}
          changeType="positive"
          icon={Clock}
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <GradesOverview />
        </div>
        <div className="lg:col-span-1">
          <AttendanceSummary />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ClassSchedule />
        </div>
        <div className="lg:col-span-1">
          <PendingAssignments />
        </div>
        <div className="lg:col-span-1">
          <Announcements />
        </div>
      </div>
    </DashboardLayout>
  )
}
