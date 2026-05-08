"use client"

import { TrendingUp, TrendingDown, Minus } from "lucide-react"

const subjects = [
  { name: "Mathematics", grade: "A", score: 92, trend: "up", teacher: "Mr. Adebayo" },
  { name: "English Language", grade: "B+", score: 85, trend: "up", teacher: "Mrs. Okonkwo" },
  { name: "Physics", grade: "A-", score: 88, trend: "stable", teacher: "Dr. Mensah" },
  { name: "Chemistry", grade: "B", score: 80, trend: "down", teacher: "Mr. Hassan" },
  { name: "Biology", grade: "A", score: 90, trend: "up", teacher: "Mrs. Kimani" },
  { name: "History", grade: "B+", score: 84, trend: "stable", teacher: "Mr. Molefe" },
]

const trendIcons = {
  up: <TrendingUp className="w-4 h-4 text-secondary" />,
  down: <TrendingDown className="w-4 h-4 text-destructive" />,
  stable: <Minus className="w-4 h-4 text-muted-foreground" />,
}

const gradeColors: { [key: string]: string } = {
  "A": "bg-secondary/20 text-secondary",
  "A-": "bg-secondary/20 text-secondary",
  "B+": "bg-primary/20 text-primary",
  "B": "bg-primary/20 text-primary",
  "B-": "bg-primary/20 text-primary",
  "C+": "bg-accent/20 text-accent",
  "C": "bg-accent/20 text-accent",
}

export function GradesOverview() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">My Grades</h3>
        <span className="text-sm text-muted-foreground">Term 1, 2024</span>
      </div>
      <div className="space-y-3">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 rounded-lg text-sm font-bold ${gradeColors[subject.grade] || "bg-muted text-muted-foreground"}`}>
                {subject.grade}
              </span>
              <div>
                <p className="font-medium text-foreground">{subject.name}</p>
                <p className="text-xs text-muted-foreground">{subject.teacher}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-foreground">{subject.score}%</span>
              {trendIcons[subject.trend as keyof typeof trendIcons]}
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
        View detailed report
      </button>
    </div>
  )
}
