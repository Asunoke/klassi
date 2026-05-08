import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { ChildrenOverview } from "@/components/dashboard/parent/children-overview"
import { ChildGrades } from "@/components/dashboard/parent/child-grades"
import { ChildAttendance } from "@/components/dashboard/parent/child-attendance"
import { Communication } from "@/components/dashboard/parent/communication"
import { Announcements } from "@/components/dashboard/announcements"
import { UpcomingEvents } from "@/components/dashboard/upcoming-events"
import { Users, Award, Clock, Bell } from "lucide-react"

export default function ParentDashboard() {
  return (
    <DashboardLayout role="parent" title="Parent Dashboard">
      {/* Welcome Section */}
      <div className="mb-6 p-6 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-1">Welcome, Mrs. Okonkwo!</h2>
        <p className="text-muted-foreground">
          Stay connected with your children&apos;s education. View grades, attendance, and communicate with teachers.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Children"
          value="2"
          icon={Users}
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
        <StatCard
          title="Avg. GPA"
          value="3.65"
          change="+0.15"
          changeType="positive"
          icon={Award}
          iconColor="text-secondary"
          iconBgColor="bg-secondary/10"
        />
        <StatCard
          title="Avg. Attendance"
          value="93.3%"
          change="+1.5%"
          changeType="positive"
          icon={Clock}
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
        <StatCard
          title="New Messages"
          value="2"
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
