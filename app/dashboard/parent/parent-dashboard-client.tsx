"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { ChildrenOverview } from "@/components/dashboard/parent/children-overview"
import { ChildGrades } from "@/components/dashboard/parent/child-grades"
import { ChildAttendance } from "@/components/dashboard/parent/child-attendance"
import { Communication } from "@/components/dashboard/parent/communication"
import { Announcements } from "@/components/dashboard/announcements"
import { UpcomingEvents } from "@/components/dashboard/upcoming-events"
import { Users, Award, Clock, Bell, Loader2 } from "lucide-react"
import { authClient } from "@/modules/auth/auth-client"
import { useDashboardStats } from "@/hooks/use-dashboard-stats"
import { DashboardSkeleton } from "@/components/dashboard/dashboard-skeleton"

export function ParentDashboardClient() {
  const { data: session, isPending: isSessionPending } = authClient.useSession()
  
  const schoolId = (session?.user as any)?.schoolId as string | undefined;
  const userId = session?.user?.id;
  const userName = session?.user?.name || "Parent";

  const { data: stats, isLoading: isStatsLoading } = useDashboardStats(schoolId, "parent", userId)

  const childrenCount = stats?.children?.toLocaleString() || "..."
  const avgGpa = stats?.avgGpa?.toLocaleString() || "..."
  const avgAttendance = stats?.avgAttendance ? `${stats.avgAttendance}%` : "..."
  const newMessages = stats?.newMessages?.toLocaleString() || "..."

  if (isSessionPending || isStatsLoading) {
    return <DashboardSkeleton role="parent" title="Parent Dashboard" />
  }

  return (
    <DashboardLayout role="parent" title="Parent Dashboard">
      {/* Welcome Section */}
      <div className="mb-6 p-6 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-1">Welcome, {userName}!</h2>
        <p className="text-muted-foreground">
          Stay connected with your children&apos;s education. View grades, attendance, and communicate with teachers.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Children"
          value={childrenCount}
          icon={Users}
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
        <StatCard
          title="Avg. GPA"
          value={avgGpa}
          change={stats?.changes?.gpa || "0"}
          changeType="positive"
          icon={Award}
          iconColor="text-secondary"
          iconBgColor="bg-secondary/10"
        />
        <StatCard
          title="Avg. Attendance"
          value={avgAttendance}
          change={stats?.changes?.attendance || "0%"}
          changeType="positive"
          icon={Clock}
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
        <StatCard
          title="New Messages"
          value={newMessages}
          change="Unread"
          changeType="neutral"
          icon={Bell}
          iconColor="text-accent"
          iconBgColor="bg-accent/10"
        />
      </div>

      {/* Children Overview */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">My Children</h2>
        <ChildrenOverview />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <ChildGrades />
        <ChildAttendance />
        <Communication />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Announcements />
        <UpcomingEvents />
      </div>
    </DashboardLayout>
  )
}
