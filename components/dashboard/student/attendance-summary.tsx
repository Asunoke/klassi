"use client"

import { CheckCircle, XCircle, Clock } from "lucide-react"

const attendanceData = {
  present: 85,
  absent: 5,
  late: 3,
  total: 93,
  percentage: 91.4,
}

const recentDays = [
  { day: "Mon", status: "present" },
  { day: "Tue", status: "present" },
  { day: "Wed", status: "late" },
  { day: "Thu", status: "present" },
  { day: "Fri", status: "present" },
  { day: "Mon", status: "present" },
  { day: "Tue", status: "absent" },
]

const statusColors = {
  present: "bg-secondary",
  absent: "bg-destructive",
  late: "bg-accent",
}

export function AttendanceSummary() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Attendance</h3>

      {/* Percentage Circle */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              className="text-muted"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${attendanceData.percentage * 3.52} 352`}
              className="text-secondary"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-2xl font-bold text-foreground">{attendanceData.percentage}%</span>
            <span className="text-xs text-muted-foreground">Attendance</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <CheckCircle className="w-4 h-4 text-secondary" />
            <span className="font-bold text-foreground">{attendanceData.present}</span>
          </div>
          <span className="text-xs text-muted-foreground">Present</span>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <XCircle className="w-4 h-4 text-destructive" />
            <span className="font-bold text-foreground">{attendanceData.absent}</span>
          </div>
          <span className="text-xs text-muted-foreground">Absent</span>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Clock className="w-4 h-4 text-accent" />
            <span className="font-bold text-foreground">{attendanceData.late}</span>
          </div>
          <span className="text-xs text-muted-foreground">Late</span>
        </div>
      </div>

      {/* Recent Days */}
      <div>
        <p className="text-sm text-muted-foreground mb-2">Last 7 Days</p>
        <div className="flex items-center justify-between gap-1">
          {recentDays.map((day, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <div className={`w-6 h-6 rounded-full ${statusColors[day.status as keyof typeof statusColors]}`} />
              <span className="text-xs text-muted-foreground">{day.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
