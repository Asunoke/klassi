import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { EnrollmentChart } from "@/components/dashboard/enrollment-chart"
import { GradeDistribution } from "@/components/dashboard/grade-distribution"
import { UpcomingEvents } from "@/components/dashboard/upcoming-events"
import { Announcements } from "@/components/dashboard/announcements"
import { Users, GraduationCap, BookOpen, TrendingUp } from "lucide-react"

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin" title="Admin Dashboard">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Students"
          value="2,847"
          change="+12%"
          changeType="positive"
          icon={Users}
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
        <StatCard
          title="Total Teachers"
          value="156"
          change="+8%"
          changeType="positive"
          icon={GraduationCap}
          iconColor="text-secondary"
          iconBgColor="bg-secondary/10"
        />
        <StatCard
          title="Active Classes"
          value="64"
          change="+5%"
          changeType="positive"
          icon={BookOpen}
          iconColor="text-accent"
          iconBgColor="bg-accent/10"
        />
        <StatCard
          title="Attendance Rate"
          value="94.2%"
          change="+2.1%"
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
