"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { month: "Jan", students: 2400 },
  { month: "Feb", students: 2520 },
  { month: "Mar", students: 2580 },
  { month: "Apr", students: 2680 },
  { month: "May", students: 2750 },
  { month: "Jun", students: 2847 },
]

export function EnrollmentChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Student Enrollment</h3>
          <p className="text-sm text-muted-foreground">Enrollment trend over time</p>
        </div>
        <select className="text-sm border border-border rounded-lg px-3 py-1.5 bg-background text-foreground">
          <option>Last 6 months</option>
          <option>Last year</option>
          <option>All time</option>
        </select>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.35 0.12 250)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="oklch(0.35 0.12 250)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.01 250)" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "oklch(0.45 0.02 250)" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "oklch(0.45 0.02 250)" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(1 0 0)",
                border: "1px solid oklch(0.92 0.01 250)",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
            <Area
              type="monotone"
              dataKey="students"
              stroke="oklch(0.35 0.12 250)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorStudents)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
