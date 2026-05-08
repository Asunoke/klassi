"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { grade: "A", count: 245, fill: "oklch(0.55 0.15 155)" },
  { grade: "B", count: 380, fill: "oklch(0.35 0.12 250)" },
  { grade: "C", count: 320, fill: "oklch(0.70 0.18 55)" },
  { grade: "D", count: 180, fill: "oklch(0.45 0.10 250)" },
  { grade: "E", count: 85, fill: "oklch(0.577 0.245 27.325)" },
]

export function GradeDistribution() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Grade Distribution</h3>
          <p className="text-sm text-muted-foreground">Overall student performance</p>
        </div>
        <select className="text-sm border border-border rounded-lg px-3 py-1.5 bg-background text-foreground">
          <option>All Classes</option>
          <option>Primary</option>
          <option>Secondary</option>
        </select>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.01 250)" vertical={false} />
            <XAxis
              dataKey="grade"
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
            <Bar
              dataKey="count"
              radius={[6, 6, 0, 0]}
              fill="oklch(0.35 0.12 250)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
