import { MoreHorizontal, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

const students = [
  { id: 1, name: "Amara Okonkwo", grade: "A", attendance: 98, trend: "up", avatar: "AO" },
  { id: 2, name: "Kwame Mensah", grade: "B+", attendance: 95, trend: "up", avatar: "KM" },
  { id: 3, name: "Fatima Hassan", grade: "A-", attendance: 92, trend: "stable", avatar: "FH" },
  { id: 4, name: "David Kimani", grade: "B", attendance: 88, trend: "down", avatar: "DK" },
  { id: 5, name: "Chioma Eze", grade: "A", attendance: 100, trend: "up", avatar: "CE" },
  { id: 6, name: "Ibrahim Musa", grade: "C+", attendance: 85, trend: "stable", avatar: "IM" },
]

const trendIcons = {
  up: <TrendingUp className="w-4 h-4 text-secondary" />,
  down: <TrendingDown className="w-4 h-4 text-destructive" />,
  stable: <Minus className="w-4 h-4 text-muted-foreground" />,
}

export function StudentList() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Students - Grade 10A</h3>
        <select className="text-sm border border-border rounded-lg px-3 py-1.5 bg-background text-foreground">
          <option>Grade 10A</option>
          <option>Grade 9B</option>
          <option>Grade 12</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Student</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Grade</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Attendance</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Trend</th>
              <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground"></th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                <td className="py-3 px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">{student.avatar}</span>
                    </div>
                    <span className="font-medium text-foreground">{student.name}</span>
                  </div>
                </td>
                <td className="py-3 px-2">
                  <span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary text-sm font-medium">
                    {student.grade}
                  </span>
                </td>
                <td className="py-3 px-2 text-foreground">{student.attendance}%</td>
                <td className="py-3 px-2">{trendIcons[student.trend as keyof typeof trendIcons]}</td>
                <td className="py-3 px-2 text-right">
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="w-full mt-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
        View all students
      </button>
    </div>
  )
}
