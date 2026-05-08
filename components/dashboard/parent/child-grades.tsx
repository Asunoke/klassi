"use client"

import { useState } from "react"

const childrenGrades = {
  "Amara Okonkwo": [
    { subject: "Mathematics", grade: "A", score: 92, teacher: "Mr. Adebayo" },
    { subject: "English", grade: "B+", score: 85, teacher: "Mrs. Okonkwo" },
    { subject: "Physics", grade: "A-", score: 88, teacher: "Dr. Mensah" },
    { subject: "Chemistry", grade: "B", score: 80, teacher: "Mr. Hassan" },
    { subject: "Biology", grade: "A", score: 90, teacher: "Mrs. Kimani" },
  ],
  "Chidi Okonkwo": [
    { subject: "Mathematics", grade: "B+", score: 86, teacher: "Mrs. Adeola" },
    { subject: "English", grade: "A-", score: 88, teacher: "Mr. Nnamdi" },
    { subject: "Science", grade: "B", score: 82, teacher: "Dr. Asante" },
    { subject: "Social Studies", grade: "A", score: 92, teacher: "Mrs. Molefe" },
    { subject: "Art", grade: "A", score: 95, teacher: "Mr. Kimani" },
  ],
}

const gradeColors: { [key: string]: string } = {
  "A": "bg-secondary/20 text-secondary",
  "A-": "bg-secondary/20 text-secondary",
  "B+": "bg-primary/20 text-primary",
  "B": "bg-primary/20 text-primary",
  "C": "bg-accent/20 text-accent",
}

export function ChildGrades() {
  const [selectedChild, setSelectedChild] = useState("Amara Okonkwo")
  const grades = childrenGrades[selectedChild as keyof typeof childrenGrades]

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Grades Overview</h3>
        <select
          value={selectedChild}
          onChange={(e) => setSelectedChild(e.target.value)}
          className="text-sm border border-border rounded-lg px-3 py-1.5 bg-background text-foreground"
        >
          <option>Amara Okonkwo</option>
          <option>Chidi Okonkwo</option>
        </select>
      </div>

      <div className="space-y-3">
        {grades.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 rounded-lg text-sm font-bold ${gradeColors[item.grade] || "bg-muted text-muted-foreground"}`}>
                {item.grade}
              </span>
              <div>
                <p className="font-medium text-foreground">{item.subject}</p>
                <p className="text-xs text-muted-foreground">{item.teacher}</p>
              </div>
            </div>
            <span className="text-sm font-medium text-foreground">{item.score}%</span>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
        Download Report Card
      </button>
    </div>
  )
}
