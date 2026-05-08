import { Clock, MapPin, User } from "lucide-react"

const schedule = [
  {
    id: 1,
    time: "8:00 - 9:30",
    subject: "Mathematics",
    teacher: "Mr. Adebayo",
    room: "Room 201",
    status: "completed",
  },
  {
    id: 2,
    time: "9:45 - 11:15",
    subject: "English Language",
    teacher: "Mrs. Okonkwo",
    room: "Room 105",
    status: "current",
  },
  {
    id: 3,
    time: "11:30 - 13:00",
    subject: "Physics",
    teacher: "Dr. Mensah",
    room: "Lab 1",
    status: "upcoming",
  },
  {
    id: 4,
    time: "14:00 - 15:30",
    subject: "Chemistry",
    teacher: "Mr. Hassan",
    room: "Lab 2",
    status: "upcoming",
  },
  {
    id: 5,
    time: "15:45 - 16:30",
    subject: "Biology",
    teacher: "Mrs. Kimani",
    room: "Room 302",
    status: "upcoming",
  },
]

const statusStyles = {
  completed: "bg-muted text-muted-foreground border-border opacity-60",
  current: "bg-primary/10 text-primary border-primary/30",
  upcoming: "bg-card text-foreground border-border",
}

export function ClassSchedule() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">{"Today's Classes"}</h3>
        <span className="text-sm text-muted-foreground">Monday</span>
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
                <div className="flex items-center gap-1 text-sm opacity-70 mt-0.5">
                  <User className="w-3.5 h-3.5" />
                  <span>{item.teacher}</span>
                </div>
              </div>
              {item.status === "current" && (
                <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  Now
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
