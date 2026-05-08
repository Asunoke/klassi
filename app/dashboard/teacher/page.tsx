import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { ClassCard } from "@/components/dashboard/teacher/class-card"
import { TodaySchedule } from "@/components/dashboard/teacher/today-schedule"
import { StudentList } from "@/components/dashboard/teacher/student-list"
import { Assignments } from "@/components/dashboard/teacher/assignments"
import { Announcements } from "@/components/dashboard/announcements"
import { BookOpen, Users, FileCheck, Clock } from "lucide-react"

const classes = [
  { name: "Grade 10A", subject: "Mathematics", students: 32, schedule: "Mon, Wed, Fri", room: "201", progress: 75 },
  { name: "Grade 9B", subject: "Mathematics", students: 30, schedule: "Tue, Thu", room: "105", progress: 68 },
  { name: "Grade 12", subject: "Advanced Calculus", students: 25, schedule: "Mon, Wed", room: "301", progress: 82 },
  { name: "Grade 11A", subject: "Mathematics", students: 28, schedule: "Tue, Thu, Fri", room: "203", progress: 60 },
]

export default function TeacherDashboard() {
  return (
    <DashboardLayout role="teacher" title="Teacher Dashboard">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="My Classes"
          value="4"
          icon={BookOpen}
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
        <StatCard
          title="Total Students"
          value="115"
          icon={Users}
          iconColor="text-secondary"
          iconBgColor="bg-secondary/10"
        />
        <StatCard
          title="Pending Grades"
          value="28"
          change="Due soon"
          changeType="neutral"
          icon={FileCheck}
          iconColor="text-accent"
          iconBgColor="bg-accent/10"
        />
        <StatCard
          title="Classes Today"
          value="5"
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
