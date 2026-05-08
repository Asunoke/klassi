import { Users, Clock, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ClassCardProps {
  name: string
  subject: string
  students: number
  schedule: string
  room: string
  progress: number
}

export function ClassCard({ name, subject, students, schedule, room, progress }: ClassCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{subject}</p>
        </div>
        <div className="px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
          Room {room}
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1.5">
          <Users className="w-4 h-4" />
          <span>{students} students</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          <span>{schedule}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-1.5">
          <span className="text-muted-foreground">Syllabus Progress</span>
          <span className="font-medium text-foreground">{progress}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex gap-2">
        <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
          <BookOpen className="w-4 h-4 mr-1.5" />
          Open
        </Button>
        <Button size="sm" variant="outline" className="flex-1">
          Grades
        </Button>
      </div>
    </div>
  )
}
