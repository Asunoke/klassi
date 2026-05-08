import { Award, TrendingUp, TrendingDown, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const children = [
  {
    id: 1,
    name: "Amara Okonkwo",
    grade: "Grade 10A",
    gpa: "3.8",
    attendance: 91.4,
    trend: "up",
    avatar: "AO",
    pendingAssignments: 3,
  },
  {
    id: 2,
    name: "Chidi Okonkwo",
    grade: "Grade 7B",
    gpa: "3.5",
    attendance: 95.2,
    trend: "up",
    avatar: "CO",
    pendingAssignments: 1,
  },
]

export function ChildrenOverview() {
  return (
    <div className="space-y-4">
      {children.map((child) => (
        <div
          key={child.id}
          className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">{child.avatar}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">{child.name}</h3>
                <p className="text-sm text-muted-foreground">{child.grade}</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-3 rounded-lg bg-secondary/10">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-secondary" />
                <span className="text-xs text-muted-foreground">GPA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-foreground">{child.gpa}</span>
                {child.trend === "up" ? (
                  <TrendingUp className="w-4 h-4 text-secondary" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-destructive" />
                )}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-primary/10">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">Attendance</span>
              </div>
              <span className="text-xl font-bold text-foreground">{child.attendance}%</span>
            </div>

            <div className="p-3 rounded-lg bg-accent/10">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-muted-foreground">Assignments</span>
              </div>
              <span className="text-xl font-bold text-foreground">{child.pendingAssignments} pending</span>
            </div>

            <div className="p-3 rounded-lg bg-muted">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-muted-foreground">Last Update</span>
              </div>
              <span className="text-sm font-medium text-foreground">Today, 10:30 AM</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
