import { FileText, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const assignments = [
  {
    id: 1,
    title: "Algebra Quiz - Chapter 5",
    class: "Grade 10A",
    dueDate: "Mar 12, 2024",
    submitted: 28,
    total: 32,
    status: "active",
  },
  {
    id: 2,
    title: "Geometry Homework",
    class: "Grade 9B",
    dueDate: "Mar 15, 2024",
    submitted: 15,
    total: 30,
    status: "active",
  },
  {
    id: 3,
    title: "Calculus Problem Set",
    class: "Grade 12",
    dueDate: "Mar 10, 2024",
    submitted: 25,
    total: 25,
    status: "completed",
  },
  {
    id: 4,
    title: "Mid-term Exam",
    class: "Grade 11A",
    dueDate: "Mar 20, 2024",
    submitted: 0,
    total: 28,
    status: "upcoming",
  },
]

const statusStyles = {
  active: { icon: Clock, color: "text-accent", bg: "bg-accent/10" },
  completed: { icon: CheckCircle, color: "text-secondary", bg: "bg-secondary/10" },
  upcoming: { icon: AlertCircle, color: "text-primary", bg: "bg-primary/10" },
}

export function Assignments() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Assignments</h3>
        <Button size="sm" className="bg-primary hover:bg-primary/90">
          <FileText className="w-4 h-4 mr-1.5" />
          Create New
        </Button>
      </div>
      <div className="space-y-3">
        {assignments.map((assignment) => {
          const StatusIcon = statusStyles[assignment.status as keyof typeof statusStyles].icon
          const statusColor = statusStyles[assignment.status as keyof typeof statusStyles].color
          const statusBg = statusStyles[assignment.status as keyof typeof statusStyles].bg

          return (
            <div
              key={assignment.id}
              className="p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg ${statusBg} flex items-center justify-center`}>
                    <StatusIcon className={`w-4 h-4 ${statusColor}`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{assignment.title}</h4>
                    <p className="text-sm text-muted-foreground">{assignment.class}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">Due: {assignment.dueDate}</span>
              </div>
              <div className="ml-12">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Submissions</span>
                  <span className="font-medium text-foreground">
                    {assignment.submitted}/{assignment.total}
                  </span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary rounded-full transition-all"
                    style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
