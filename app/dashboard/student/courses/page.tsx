"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BookOpen, Clock, Users, TrendingUp, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"

const courses = [
  { 
    id: 1, 
    name: "Physics", 
    teacher: "Dr. Ngozi Adichie", 
    progress: 68, 
    grade: "B+", 
    score: 78,
    nextClass: "Tomorrow, 8:00 AM",
    assignments: 2,
    color: "bg-primary"
  },
  { 
    id: 2, 
    name: "Mathematics", 
    teacher: "Dr. Ngozi Adichie", 
    progress: 72, 
    grade: "A-", 
    score: 82,
    nextClass: "Today, 10:45 AM",
    assignments: 1,
    color: "bg-secondary"
  },
  { 
    id: 3, 
    name: "Chemistry", 
    teacher: "Mr. David Okafor", 
    progress: 55, 
    grade: "B", 
    score: 71,
    nextClass: "Wednesday, 8:00 AM",
    assignments: 3,
    color: "bg-accent"
  },
  { 
    id: 4, 
    name: "Biology", 
    teacher: "Mr. David Okafor", 
    progress: 60, 
    grade: "B+", 
    score: 76,
    nextClass: "Thursday, 10:00 AM",
    assignments: 0,
    color: "bg-purple-500"
  },
  { 
    id: 5, 
    name: "English Language", 
    teacher: "Mr. Kwesi Mensah", 
    progress: 80, 
    grade: "A", 
    score: 88,
    nextClass: "Tomorrow, 10:00 AM",
    assignments: 1,
    color: "bg-pink-500"
  },
  { 
    id: 6, 
    name: "Literature", 
    teacher: "Mr. Kwesi Mensah", 
    progress: 75, 
    grade: "A-", 
    score: 84,
    nextClass: "Friday, 8:45 AM",
    assignments: 0,
    color: "bg-cyan-500"
  },
  { 
    id: 7, 
    name: "History", 
    teacher: "Mrs. Aisha Mohammed", 
    progress: 65, 
    grade: "B", 
    score: 72,
    nextClass: "Wednesday, 10:45 AM",
    assignments: 1,
    color: "bg-amber-500"
  },
  { 
    id: 8, 
    name: "Government", 
    teacher: "Mrs. Aisha Mohammed", 
    progress: 70, 
    grade: "B+", 
    score: 77,
    nextClass: "Thursday, 12:00 PM",
    assignments: 0,
    color: "bg-emerald-500"
  },
]

export default function CoursesPage() {
  const totalAssignments = courses.reduce((acc, c) => acc + c.assignments, 0)
  const avgScore = Math.round(courses.reduce((acc, c) => acc + c.score, 0) / courses.length)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
          <p className="text-muted-foreground">SS3 Science - Term 3, 2024</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Enrolled Courses</p>
              <p className="text-2xl font-bold">{courses.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <TrendingUp className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Average Score</p>
              <p className="text-2xl font-bold">{avgScore}%</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <FileText className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending Tasks</p>
              <p className="text-2xl font-bold">{totalAssignments}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <Clock className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Next Class</p>
              <p className="text-lg font-bold">Math 10:45</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className={`h-2 w-16 rounded-full ${course.color}`} />
                <Badge variant={course.score >= 80 ? "default" : course.score >= 60 ? "secondary" : "outline"}>
                  {course.grade}
                </Badge>
              </div>
              <CardTitle className="mt-3">{course.name}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Avatar className="h-5 w-5">
                  <AvatarFallback className="text-[10px]">
                    {course.teacher.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                {course.teacher}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Syllabus Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{course.nextClass}</span>
                </div>
                {course.assignments > 0 && (
                  <Badge variant="destructive" className="text-xs">
                    {course.assignments} due
                  </Badge>
                )}
              </div>

              <Link href={`/dashboard/student/courses/${course.id}`}>
                <Button variant="ghost" className="w-full justify-between" size="sm">
                  View Course
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
