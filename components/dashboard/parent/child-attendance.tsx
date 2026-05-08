"use client"

import { useState } from "react"
import { CheckCircle, XCircle, Clock } from "lucide-react"

const childrenAttendance = {
  "Amara Okonkwo": {
    present: 85,
    absent: 5,
    late: 3,
    percentage: 91.4,
    recentDays: [
      { date: "Mon, Mar 11", status: "present" },
      { date: "Fri, Mar 8", status: "present" },
      { date: "Thu, Mar 7", status: "late" },
      { date: "Wed, Mar 6", status: "present" },
      { date: "Tue, Mar 5", status: "absent" },
    ],
  },
  "Chidi Okonkwo": {
    present: 90,
    absent: 2,
    late: 2,
    percentage: 95.2,
    recentDays: [
      { date: "Mon, Mar 11", status: "present" },
      { date: "Fri, Mar 8", status: "present" },
      { date: "Thu, Mar 7", status: "present" },
      { date: "Wed, Mar 6", status: "present" },
      { date: "Tue, Mar 5", status: "late" },
    ],
  },
}

const statusIcons = {
  present: <CheckCircle className="w-4 h-4 text-secondary" />,
  absent: <XCircle className="w-4 h-4 text-destructive" />,
  late: <Clock className="w-4 h-4 text-accent" />,
}

const statusLabels = {
  present: "Present",
  absent: "Absent",
  late: "Late",
}

export function ChildAttendance() {
  const [selectedChild, setSelectedChild] = useState("Amara Okonkwo")
  const attendance = childrenAttendance[selectedChild as keyof typeof childrenAttendance]

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Attendance</h3>
        <select
          value={selectedChild}
          onChange={(e) => setSelectedChild(e.target.value)}
          className="text-sm border border-border rounded-lg px-3 py-1.5 bg-background text-foreground"
        >
          <option>Amara Okonkwo</option>
          <option>Chidi Okonkwo</option>
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="p-3 rounded-lg bg-secondary/10 text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <CheckCircle className="w-4 h-4 text-secondary" />
          </div>
          <span className="text-xl font-bold text-foreground">{attendance.present}</span>
          <p className="text-xs text-muted-foreground">Present</p>
        </div>
        <div className="p-3 rounded-lg bg-destructive/10 text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <XCircle className="w-4 h-4 text-destructive" />
          </div>
          <span className="text-xl font-bold text-foreground">{attendance.absent}</span>
          <p className="text-xs text-muted-foreground">Absent</p>
        </div>
        <div className="p-3 rounded-lg bg-accent/10 text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Clock className="w-4 h-4 text-accent" />
          </div>
          <span className="text-xl font-bold text-foreground">{attendance.late}</span>
          <p className="text-xs text-muted-foreground">Late</p>
        </div>
      </div>

      {/* Recent Days */}
      <div>
        <p className="text-sm text-muted-foreground mb-3">Recent Days</p>
        <div className="space-y-2">
          {attendance.recentDays.map((day, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2.5 rounded-lg border border-border"
            >
              <span className="text-sm text-foreground">{day.date}</span>
              <div className="flex items-center gap-2">
                {statusIcons[day.status as keyof typeof statusIcons]}
                <span className="text-sm text-muted-foreground">
                  {statusLabels[day.status as keyof typeof statusLabels]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
