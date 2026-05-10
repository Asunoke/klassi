"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { EnrollmentChart } from "@/components/dashboard/enrollment-chart"
import { GradeDistribution } from "@/components/dashboard/grade-distribution"
import { UpcomingEvents } from "@/components/dashboard/upcoming-events"
import { Announcements } from "@/components/dashboard/announcements"
import { Users, GraduationCap, BookOpen, TrendingUp, Loader2 } from "lucide-react"
import { authClient } from "@/modules/auth/auth-client"
import { useDashboardStats } from "@/hooks/use-dashboard-stats"
import { DashboardSkeleton } from "@/components/dashboard/dashboard-skeleton"

export function AdminDashboardClient() {
  const { data: session, isPending: isSessionPending } = authClient.useSession()
  
  // Custom field schoolId from Better Auth
  const schoolId = (session?.user as any)?.schoolId as string | undefined;

  const { data: stats, isLoading: isStatsLoading } = useDashboardStats(schoolId)

  // Use real data if available, otherwise fallback to placeholders
  const totalStudents = stats?.totalStudents?.toLocaleString() || "..."
  const totalTeachers = stats?.totalTeachers?.toLocaleString() || "..."
  const activeClasses = stats?.activeClasses?.toLocaleString() || "..."
  const attendanceRate = stats?.attendanceRate ? `${stats.attendanceRate}%` : "..."

  if (isSessionPending || isStatsLoading) {
    return <DashboardSkeleton role="admin" title="Admin Dashboard" />
  }

  return (
    <DashboardLayout role="admin" title="Admin Dashboard">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Students"
          value={totalStudents}
          change={stats?.changes?.students || "0%"}
          changeType="positive"
          icon={Users}
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
        <StatCard
          title="Total Teachers"
          value={totalTeachers}
          change={stats?.changes?.teachers || "0%"}
          changeType="positive"
          icon={GraduationCap}
          iconColor="text-secondary"
          iconBgColor="bg-secondary/10"
        />
        <StatCard
          title="Active Classes"
          value={activeClasses}
          change={stats?.changes?.classes || "0%"}
          changeType="positive"
          icon={BookOpen}
          iconColor="text-accent"
          iconBgColor="bg-accent/10"
        />
        <StatCard
          title="Attendance Rate"
          value={attendanceRate}
          change={stats?.changes?.attendance || "0%"}
          changeType="positive"
          icon={TrendingUp}
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <EnrollmentChart />
        <GradeDistribution />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <QuickActions />
        </div>
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>
        <div className="lg:col-span-1">
          <UpcomingEvents />
        </div>
        <div className="lg:col-span-1">
          <Announcements />
        </div>
      </div>
    </DashboardLayout>
  )
}
