import { FileText, Clock, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const assignments = [
  {
    id: 1,
    title: "Algebra Quiz - Chapter 5",
    subject: "Mathematics",
    dueDate: "Tomorrow",
    status: "urgent",
  },
  {
    id: 2,
    title: "Essay: The Impact of Climate Change",
    subject: "English Language",
    dueDate: "Mar 15, 2024",
    status: "pending",
  },
  {
    id: 3,
    title: "Lab Report: Newton Laws",
    subject: "Physics",
    dueDate: "Mar 18, 2024",
    status: "pending",
  },
  {
    id: 4,
    title: "Chemical Equations Worksheet",
    subject: "Chemistry",
    dueDate: "Mar 12, 2024",
    status: "submitted",
  },
]

const statusStyles = {
  urgent: { icon: AlertCircle, color: "text-destructive", bg: "bg-destructive/10", label: "Due Soon" },
  pending: { icon: Clock, color: "text-accent", bg: "bg-accent/10", label: "Pending" },
  submitted: { icon: CheckCircle, color: "text-secondary", bg: "bg-secondary/10", label: "Submitted" },
}

export function PendingAssignments() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Assignments</h3>
        <span className="px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
          3 pending
        </span>
      </div>
      <div className="space-y-3">
        {assignments.map((assignment) => {
          const StatusIcon = statusStyles[assignment.status as keyof typeof statusStyles].icon
          const statusColor = statusStyles[assignment.status as keyof typeof statusStyles].color
          const statusBg = statusStyles[assignment.status as keyof typeof statusStyles].bg
          const statusLabel = statusStyles[assignment.status as keyof typeof statusStyles].label

          return (
            <div
              key={assignment.id}
              className="p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg ${statusBg} flex items-center justify-center shrink-0`}>
                    <StatusIcon className={`w-4 h-4 ${statusColor}`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{assignment.title}</h4>
                    <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">Due: {assignment.dueDate}</span>
                      <span className={`px-2 py-0.5 rounded-full ${statusBg} ${statusColor} text-xs font-medium`}>
                        {statusLabel}
                      </span>
                    </div>
                  </div>
                </div>
                {assignment.status !== "submitted" && (
                  <Button size="sm" variant="outline">
                    Submit
                  </Button>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <button className="w-full mt-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
        View all assignments
      </button>
    </div>
  )
}
