"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Check, X, Clock, Save, UserCheck, UserX, Users } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const students = [
  { id: "STU001", name: "Adaeze Okonkwo", status: "present" },
  { id: "STU002", name: "Chidi Nwachukwu", status: "present" },
  { id: "STU003", name: "Fatima Ibrahim", status: "present" },
  { id: "STU004", name: "Kwame Asante", status: "absent" },
  { id: "STU005", name: "Amina Yusuf", status: "late" },
  { id: "STU006", name: "Emeka Obi", status: "present" },
  { id: "STU007", name: "Blessing Adeyemi", status: "present" },
  { id: "STU008", name: "David Okafor", status: "present" },
]

type AttendanceStatus = "present" | "absent" | "late" | "unmarked"

export default function TeacherAttendancePage() {
  const [date, setDate] = useState<Date>(new Date())
  const [selectedClass, setSelectedClass] = useState("ss3-physics")
  const [attendance, setAttendance] = useState<Record<string, AttendanceStatus>>(
    Object.fromEntries(students.map(s => [s.id, s.status as AttendanceStatus]))
  )

  const updateAttendance = (studentId: string, status: AttendanceStatus) => {
    setAttendance(prev => ({ ...prev, [studentId]: status }))
  }

  const presentCount = Object.values(attendance).filter(s => s === "present").length
  const absentCount = Object.values(attendance).filter(s => s === "absent").length
  const lateCount = Object.values(attendance).filter(s => s === "late").length

  const markAllPresent = () => {
    setAttendance(Object.fromEntries(students.map(s => [s.id, "present" as AttendanceStatus])))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
          <p className="text-muted-foreground">Mark and track student attendance</p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Attendance
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Select value={selectedClass} onValueChange={setSelectedClass}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ss3-physics">SS3 - Physics</SelectItem>
            <SelectItem value="ss3-math">SS3 - Mathematics</SelectItem>
            <SelectItem value="ss2-physics">SS2 - Physics</SelectItem>
            <SelectItem value="ss2-math">SS2 - Mathematics</SelectItem>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[200px] justify-start">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {format(date, "PPP")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => d && setDate(d)}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Button variant="outline" onClick={markAllPresent}>
          <UserCheck className="mr-2 h-4 w-4" />
          Mark All Present
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <UserCheck className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Present</p>
              <p className="text-2xl font-bold">{presentCount}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
              <UserX className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Absent</p>
              <p className="text-2xl font-bold">{absentCount}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Late</p>
              <p className="text-2xl font-bold">{lateCount}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance List */}
      <Card>
        <CardHeader>
          <CardTitle>SS3 - Physics</CardTitle>
          <CardDescription>{format(date, "EEEE, MMMM d, yyyy")} - {students.length} students</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {students.map((student) => (
              <div
                key={student.id}
                className={cn(
                  "flex items-center justify-between p-4 rounded-lg border transition-colors",
                  attendance[student.id] === "present" && "bg-secondary/5 border-secondary/30",
                  attendance[student.id] === "absent" && "bg-destructive/5 border-destructive/30",
                  attendance[student.id] === "late" && "bg-accent/5 border-accent/30"
                )}
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {student.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-muted-foreground">{student.id}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge 
                    variant={
                      attendance[student.id] === "present" ? "default" :
                      attendance[student.id] === "absent" ? "destructive" :
                      attendance[student.id] === "late" ? "secondary" : "outline"
                    }
                    className="mr-2"
                  >
                    {attendance[student.id].charAt(0).toUpperCase() + attendance[student.id].slice(1)}
                  </Badge>
                  
                  <Button
                    size="icon"
                    variant={attendance[student.id] === "present" ? "default" : "outline"}
                    className="h-9 w-9"
                    onClick={() => updateAttendance(student.id, "present")}
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant={attendance[student.id] === "late" ? "secondary" : "outline"}
                    className="h-9 w-9"
                    onClick={() => updateAttendance(student.id, "late")}
                  >
                    <Clock className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant={attendance[student.id] === "absent" ? "destructive" : "outline"}
                    className="h-9 w-9"
                    onClick={() => updateAttendance(student.id, "absent")}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-6 pt-4 border-t">
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-secondary" />
                <span>Present ({presentCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-accent" />
                <span>Late ({lateCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive" />
                <span>Absent ({absentCount})</span>
              </div>
            </div>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Submit Attendance
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
