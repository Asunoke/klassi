import { Clock, MapPin } from "lucide-react"

const schedule = [
  {
    id: 1,
    time: "8:00 - 9:30",
    subject: "Mathematics",
    class: "Grade 10A",
    room: "Room 201",
    status: "completed",
  },
  {
    id: 2,
    time: "9:45 - 11:15",
    subject: "Mathematics",
    class: "Grade 9B",
    room: "Room 105",
    status: "current",
  },
  {
    id: 3,
    time: "11:30 - 13:00",
    subject: "Advanced Calculus",
    class: "Grade 12",
    room: "Room 301",
    status: "upcoming",
  },
  {
    id: 4,
    time: "14:00 - 15:30",
    subject: "Mathematics",
    class: "Grade 11A",
    room: "Room 203",
    status: "upcoming",
  },
  {
    id: 5,
    time: "15:45 - 16:30",
    subject: "Extra Classes",
    class: "Grade 10A",
    room: "Room 201",
    status: "upcoming",
  },
]

const statusStyles = {
  completed: "bg-muted text-muted-foreground border-border",
  current: "bg-primary/10 text-primary border-primary/20",
  upcoming: "bg-card text-foreground border-border",
}

export function TodaySchedule() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">{"Today's Schedule"}</h3>
        <span className="text-sm text-muted-foreground">5 classes</span>
      </div>
      <div className="space-y-3">
        {schedule.map((item) => (
          <div
            key={item.id}
            className={`p-4 rounded-lg border ${statusStyles[item.status as keyof typeof statusStyles]}`}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-medium">{item.subject}</h4>
                <p className="text-sm opacity-70">{item.class}</p>
              </div>
              {item.status === "current" && (
                <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  In Progress
                </span>
              )}
            </div>
            <div className="flex items-center gap-4 text-sm opacity-70">
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{item.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{item.room}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
