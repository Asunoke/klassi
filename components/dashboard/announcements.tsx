import { Bell, Pin } from "lucide-react"

const announcements = [
  {
    id: 1,
    title: "Term 2 Schedule Released",
    content: "The schedule for Term 2 has been released. Please check the academic calendar for important dates.",
    date: "Mar 10, 2024",
    pinned: true,
    author: "Admin",
  },
  {
    id: 2,
    title: "Parent-Teacher Conference",
    content: "Parent-teacher conferences will be held on March 15th. Please book your slots through the parent portal.",
    date: "Mar 8, 2024",
    pinned: true,
    author: "Principal",
  },
  {
    id: 3,
    title: "Sports Day Registration",
    content: "Registration for Sports Day is now open. All students are encouraged to participate.",
    date: "Mar 5, 2024",
    pinned: false,
    author: "Sports Dept",
  },
]

export function Announcements() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Announcements</h3>
        <Bell className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="p-4 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-start gap-2">
              {announcement.pinned && (
                <Pin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-foreground text-sm">{announcement.title}</h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{announcement.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{announcement.content}</p>
                <p className="text-xs text-muted-foreground mt-2">Posted by {announcement.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
        View all announcements
      </button>
    </div>
  )
}
