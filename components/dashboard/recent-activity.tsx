import { Bell, Users, FileText, Calendar, MessageSquare, BookOpen } from "lucide-react"

const activities = [
  {
    id: 1,
    icon: Users,
    text: "15 new students enrolled in Grade 5",
    time: "5 minutes ago",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 2,
    icon: Bell,
    text: "New announcement posted: Term 2 Schedule",
    time: "1 hour ago",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: 3,
    icon: FileText,
    text: "Grade reports generated for Form 3",
    time: "2 hours ago",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    id: 4,
    icon: Calendar,
    text: "Parent-teacher meeting scheduled",
    time: "3 hours ago",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 5,
    icon: MessageSquare,
    text: "Mrs. Okonkwo sent a message",
    time: "4 hours ago",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: 6,
    icon: BookOpen,
    text: "New class created: Advanced Mathematics",
    time: "5 hours ago",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
]

export function RecentActivity() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className={`w-9 h-9 rounded-lg ${activity.bgColor} flex items-center justify-center shrink-0`}>
              <activity.icon className={`w-4 h-4 ${activity.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">{activity.text}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
        View all activity
      </button>
    </div>
  )
}
