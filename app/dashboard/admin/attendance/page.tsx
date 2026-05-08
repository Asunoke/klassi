"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { CalendarIcon, Users, UserCheck, UserX, Clock, Download, TrendingUp, TrendingDown } from "lucide-react"
import { format } from "date-fns"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts"

const weeklyData = [
  { day: "Mon", present: 1180, absent: 67 },
  { day: "Tue", present: 1195, absent: 52 },
  { day: "Wed", present: 1201, absent: 46 },
  { day: "Thu", present: 1175, absent: 72 },
  { day: "Fri", present: 1150, absent: 97 },
]

const classAttendance = [
  { class: "SS3 Science A", present: 30, absent: 2, late: 0, total: 32 },
  { class: "SS3 Science B", present: 28, absent: 1, late: 1, total: 30 },
  { class: "SS3 Arts", present: 25, absent: 2, late: 1, total: 28 },
  { class: "SS2 Science A", present: 32, absent: 1, late: 1, total: 34 },
  { class: "SS2 Commercial", present: 29, absent: 2, late: 0, total: 31 },
  { class: "SS1 Science", present: 31, absent: 1, late: 1, total: 33 },
]

const absentStudents = [
  { id: "STU001", name: "Chidi Nwachukwu", class: "SS3 Arts", reason: "Medical", days: 3 },
  { id: "STU002", name: "Amina Yusuf", class: "SS1 Science", reason: "Family", days: 2 },
  { id: "STU003", name: "David Okafor", class: "JSS2", reason: "Unknown", days: 1 },
  { id: "STU004", name: "Blessing Adeyemi", class: "JSS3", reason: "Medical", days: 1 },
]

export default function AttendancePage() {
  const [date, setDate] = useState<Date>(new Date())
  const [selectedClass, setSelectedClass] = useState("all")

  const totalPresent = classAttendance.reduce((acc, c) => acc + c.present, 0)
  const totalAbsent = classAttendance.reduce((acc, c) => acc + c.absent, 0)
  const totalLate = classAttendance.reduce((acc, c) => acc + c.late, 0)
  const totalStudents = classAttendance.reduce((acc, c) => acc + c.total, 0)
  const attendanceRate = ((totalPresent / totalStudents) * 100).toFixed(1)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
          <p className="text-muted-foreground">Track and manage student attendance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Date and Class Filter */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[240px] justify-start">
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
        <Select value={selectedClass} onValueChange={setSelectedClass}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Classes</SelectItem>
            <SelectItem value="ss3">SS3 Classes</SelectItem>
            <SelectItem value="ss2">SS2 Classes</SelectItem>
            <SelectItem value="ss1">SS1 Classes</SelectItem>
            <SelectItem value="jss">JSS Classes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Students</p>
              <p className="text-2xl font-bold">{totalStudents}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <UserCheck className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Present Today</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold">{totalPresent}</p>
                <Badge variant="secondary" className="text-xs">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  {attendanceRate}%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
              <UserX className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Absent Today</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold">{totalAbsent}</p>
                <Badge variant="destructive" className="text-xs">
                  <TrendingDown className="mr-1 h-3 w-3" />
                  {((totalAbsent / totalStudents) * 100).toFixed(1)}%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Late Arrivals</p>
              <p className="text-2xl font-bold">{totalLate}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Attendance Trend</CardTitle>
            <CardDescription>Attendance pattern over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="day" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Area type="monotone" dataKey="present" stackId="1" stroke="hsl(var(--secondary))" fill="hsl(var(--secondary))" fillOpacity={0.6} name="Present" />
                  <Area type="monotone" dataKey="absent" stackId="1" stroke="hsl(var(--destructive))" fill="hsl(var(--destructive))" fillOpacity={0.6} name="Absent" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attendance by Class</CardTitle>
            <CardDescription>{"Today's attendance breakdown by class"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={classAttendance} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis type="number" className="text-xs" />
                  <YAxis dataKey="class" type="category" className="text-xs" width={100} />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar dataKey="present" fill="hsl(var(--secondary))" name="Present" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="absent" fill="hsl(var(--destructive))" name="Absent" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Absent Students */}
      <Card>
        <CardHeader>
          <CardTitle>Absent Students Today</CardTitle>
          <CardDescription>Students who are absent and may need follow-up</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Consecutive Days</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {absentStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">
                          {student.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">{student.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>
                    <Badge variant={student.reason === "Unknown" ? "destructive" : "outline"}>
                      {student.reason}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className={student.days >= 3 ? "text-destructive font-medium" : ""}>
                      {student.days} {student.days === 1 ? "day" : "days"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Contact Guardian</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
