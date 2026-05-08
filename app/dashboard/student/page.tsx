import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { GradesOverview } from "@/components/dashboard/student/grades-overview"
import { ClassSchedule } from "@/components/dashboard/student/class-schedule"
import { PendingAssignments } from "@/components/dashboard/student/pending-assignments"
import { AttendanceSummary } from "@/components/dashboard/student/attendance-summary"
import { Announcements } from "@/components/dashboard/announcements"
import { BookOpen, FileText, Award, Clock } from "lucide-react"

export default function StudentDashboard() {
  return (
    <DashboardLayout role="student" title="Student Dashboard">
      {/* Welcome Section */}
      <div className="mb-6 p-6 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-1">Welcome back, Amara!</h2>
        <p className="text-muted-foreground">
          You have 5 classes today and 3 pending assignments. Keep up the great work!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Current GPA"
          value="3.8"
          change="+0.2"
          changeType="positive"
          icon={Award}
          iconColor="text-secondary"
          iconBgColor="bg-secondary/10"
        />
        <StatCard
          title="Classes Today"
          value="5"
          icon={BookOpen}
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
        <StatCard
          title="Pending Assignments"
          value="3"
          change="Due soon"
          changeType="neutral"
          icon={FileText}
          iconColor="text-accent"
          iconBgColor="bg-accent/10"
        />
        <StatCard
          title="Attendance Rate"
          value="91.4%"
          change="+1.2%"
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
