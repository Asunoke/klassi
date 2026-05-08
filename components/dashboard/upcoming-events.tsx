import { Calendar } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Staff Meeting",
    date: "Today",
    time: "10:00 AM",
    type: "meeting",
  },
  {
    id: 2,
    title: "Grade 6 Exams",
    date: "Tomorrow",
    time: "8:00 AM",
    type: "exam",
  },
  {
    id: 3,
    title: "Parent-Teacher Conference",
    date: "Mar 15",
    time: "2:00 PM",
    type: "meeting",
  },
  {
    id: 4,
    title: "Sports Day",
    date: "Mar 20",
    time: "9:00 AM",
    type: "event",
  },
  {
    id: 5,
    title: "Term Break Begins",
    date: "Mar 25",
    time: "12:00 PM",
    type: "holiday",
  },
]

const typeColors = {
  meeting: "bg-primary/10 text-primary border-primary/20",
  exam: "bg-accent/10 text-accent border-accent/20",
  event: "bg-secondary/10 text-secondary border-secondary/20",
  holiday: "bg-muted text-muted-foreground border-border",
}

export function UpcomingEvents() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Upcoming Events</h3>
        <Calendar className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className={`p-3 rounded-lg border ${typeColors[event.type as keyof typeof typeColors]}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium text-sm">{event.title}</p>
                <p className="text-xs opacity-70 mt-0.5">
                  {event.date} at {event.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
        View full calendar
      </button>
    </div>
  )
}
