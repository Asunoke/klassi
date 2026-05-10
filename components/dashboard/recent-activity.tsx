import { Bell, Users, FileText, Calendar, MessageSquare, BookOpen } from "lucide-react"
import { EmptyState } from "./empty-state"

const activities: any[] = [
  /* 
  Uncomment for dummy data 
  {
    id: 1,
    icon: Users,
    text: "15 new students enrolled in Grade 5",
    time: "5 minutes ago",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  */
]

export function RecentActivity() {
  if (activities.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 h-full flex flex-col">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="flex-1 flex flex-col justify-center">
          <EmptyState 
            icon={Bell} 
            title="No recent activity" 
            description="Things are quiet right now. When students enroll or teachers are added, you'll see it here." 
          />
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
      <div className="space-y-4 flex-1">
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
