"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin, Users, ChevronLeft, ChevronRight, CalendarDays } from "lucide-react"
import { cn } from "@/lib/utils"

const weekSchedule = {
  Monday: [
    { time: "8:00 - 8:45", subject: "Physics", class: "SS3 Science A", room: "Lab 1", students: 32 },
    { time: "8:45 - 9:30", subject: "Physics", class: "SS3 Science B", room: "Lab 1", students: 30 },
    { time: "10:00 - 10:45", subject: "Mathematics", class: "SS2 Science A", room: "Room 204", students: 34 },
    { time: "10:45 - 11:30", subject: "Free Period", class: "", room: "", students: 0 },
    { time: "12:00 - 12:45", subject: "Physics", class: "SS2 Science A", room: "Lab 2", students: 34 },
    { time: "12:45 - 1:30", subject: "Mathematics", class: "SS3 Science A", room: "Room 301", students: 32 },
  ],
  Tuesday: [
    { time: "8:00 - 8:45", subject: "Mathematics", class: "SS3 Science B", room: "Room 301", students: 30 },
    { time: "8:45 - 9:30", subject: "Free Period", class: "", room: "", students: 0 },
    { time: "10:00 - 10:45", subject: "Physics", class: "SS2 Science A", room: "Lab 1", students: 34 },
    { time: "10:45 - 11:30", subject: "Physics", class: "SS2 Science B", room: "Lab 1", students: 31 },
    { time: "12:00 - 12:45", subject: "Mathematics", class: "SS2 Science B", room: "Room 204", students: 31 },
    { time: "12:45 - 1:30", subject: "Staff Meeting", class: "", room: "Conference Room", students: 0 },
  ],
  Wednesday: [
    { time: "8:00 - 8:45", subject: "Physics", class: "SS3 Science A", room: "Lab 1", students: 32 },
    { time: "8:45 - 9:30", subject: "Physics", class: "SS3 Science B", room: "Lab 1", students: 30 },
    { time: "10:00 - 10:45", subject: "Free Period", class: "", room: "", students: 0 },
    { time: "10:45 - 11:30", subject: "Mathematics", class: "SS3 Science A", room: "Room 301", students: 32 },
    { time: "12:00 - 12:45", subject: "Mathematics", class: "SS3 Science B", room: "Room 301", students: 30 },
    { time: "12:45 - 1:30", subject: "Physics Practical", class: "SS3 Combined", room: "Lab 1", students: 62 },
  ],
  Thursday: [
    { time: "8:00 - 8:45", subject: "Mathematics", class: "SS2 Science A", room: "Room 204", students: 34 },
    { time: "8:45 - 9:30", subject: "Mathematics", class: "SS2 Science B", room: "Room 204", students: 31 },
    { time: "10:00 - 10:45", subject: "Physics", class: "SS3 Science A", room: "Lab 2", students: 32 },
    { time: "10:45 - 11:30", subject: "Physics", class: "SS3 Science B", room: "Lab 2", students: 30 },
    { time: "12:00 - 12:45", subject: "Free Period", class: "", room: "", students: 0 },
    { time: "12:45 - 1:30", subject: "Free Period", class: "", room: "", students: 0 },
  ],
  Friday: [
    { time: "8:00 - 8:45", subject: "Physics Practical", class: "SS2 Combined", room: "Lab 1", students: 65 },
    { time: "8:45 - 9:30", subject: "Physics Practical", class: "SS2 Combined", room: "Lab 1", students: 65 },
    { time: "10:00 - 10:45", subject: "Mathematics", class: "SS3 Science A", room: "Room 301", students: 32 },
    { time: "10:45 - 11:30", subject: "Mathematics", class: "SS3 Science B", room: "Room 301", students: 30 },
    { time: "12:00 - 12:45", subject: "Club Activity", class: "Science Club", room: "Lab 1", students: 25 },
    { time: "12:45 - 1:30", subject: "Free Period", class: "", room: "", students: 0 },
  ],
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const

export default function SchedulePage() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" }) as typeof days[number]
  const todaySchedule = weekSchedule[today] || weekSchedule.Monday

  const totalClasses = Object.values(weekSchedule).flat().filter(s => s.class && !s.subject.includes("Free") && !s.subject.includes("Meeting")).length
  const totalStudents = new Set(Object.values(weekSchedule).flat().filter(s => s.class).map(s => s.class)).size

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Schedule</h1>
          <p className="text-muted-foreground">Your weekly teaching schedule</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline">
            <CalendarDays className="mr-2 h-4 w-4" />
            This Week
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Classes This Week</p>
              <p className="text-2xl font-bold">{totalClasses}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <Users className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Different Classes</p>
              <p className="text-2xl font-bold">{totalStudents}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Next Class</p>
              <p className="text-2xl font-bold">Lab 1</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule Highlight */}
      <Card className="border-primary/30 bg-primary/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{"Today's Schedule"}</CardTitle>
              <CardDescription>{today}, {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</CardDescription>
            </div>
            <Badge variant="default">{todaySchedule.filter(s => s.class && !s.subject.includes("Free")).length} classes</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {todaySchedule.map((slot, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-center justify-between p-4 rounded-lg border bg-card",
                  slot.subject.includes("Free") && "opacity-50",
                  slot.subject.includes("Meeting") && "border-accent/30 bg-accent/5"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className="text-center min-w-[80px]">
                    <p className="text-sm font-medium">{slot.time.split(" - ")[0]}</p>
                    <p className="text-xs text-muted-foreground">{slot.time.split(" - ")[1]}</p>
                  </div>
                  <div>
                    <p className="font-medium">{slot.subject}</p>
                    {slot.class && <p className="text-sm text-muted-foreground">{slot.class}</p>}
                  </div>
                </div>
                {slot.room && (
                  <div className="flex items-center gap-4">
                    {slot.students > 0 && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {slot.students}
                      </div>
                    )}
                    <Badge variant="outline">
                      <MapPin className="mr-1 h-3 w-3" />
                      {slot.room}
                    </Badge>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Full Week Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Full Week Schedule</CardTitle>
          <CardDescription>View your complete weekly timetable</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={today.toLowerCase()} className="space-y-4">
            <TabsList className="grid w-full grid-cols-5">
              {days.map(day => (
                <TabsTrigger key={day} value={day.toLowerCase()}>{day.slice(0, 3)}</TabsTrigger>
              ))}
            </TabsList>

            {days.map(day => (
              <TabsContent key={day} value={day.toLowerCase()} className="space-y-3">
                {weekSchedule[day].map((slot, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-lg border",
                      slot.subject.includes("Free") && "bg-muted/50",
                      slot.subject === "Physics" && "border-l-4 border-l-primary",
                      slot.subject === "Mathematics" && "border-l-4 border-l-secondary",
                      slot.subject.includes("Practical") && "border-l-4 border-l-accent"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-center min-w-[100px]">
                        <p className="font-mono text-sm">{slot.time}</p>
                      </div>
                      <div>
                        <p className="font-medium">{slot.subject}</p>
                        {slot.class && <p className="text-sm text-muted-foreground">{slot.class}</p>}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {slot.students > 0 && (
                        <Badge variant="secondary">
                          <Users className="mr-1 h-3 w-3" />
                          {slot.students}
                        </Badge>
                      )}
                      {slot.room && (
                        <Badge variant="outline">
                          <MapPin className="mr-1 h-3 w-3" />
                          {slot.room}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
