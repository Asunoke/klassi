import { Plus, UserPlus, BookOpen, Bell, FileText, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const actions = [
  { label: "Add Student", icon: UserPlus, color: "bg-primary hover:bg-primary/90" },
  { label: "Create Class", icon: BookOpen, color: "bg-secondary hover:bg-secondary/90" },
  { label: "Post Announcement", icon: Bell, color: "bg-accent hover:bg-accent/90 text-accent-foreground" },
  { label: "Generate Report", icon: FileText, color: "bg-primary hover:bg-primary/90" },
  { label: "Schedule Event", icon: Calendar, color: "bg-secondary hover:bg-secondary/90" },
]

export function QuickActions() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
        {actions.map((action, index) => (
          <Button
            key={index}
            className={`justify-start gap-2 ${action.color} text-white`}
            size="sm"
          >
            <action.icon className="w-4 h-4" />
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
