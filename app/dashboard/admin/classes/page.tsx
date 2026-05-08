"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Search, Plus, Users, BookOpen, Clock, TrendingUp, ChevronRight } from "lucide-react"
import Link from "next/link"

const classes = [
  { id: "CLS001", name: "SS3 Science A", teacher: "Dr. Ngozi Adichie", students: 32, capacity: 35, avgGrade: 78, attendance: 94, subjects: 8 },
  { id: "CLS002", name: "SS3 Science B", teacher: "Mr. David Okafor", students: 30, capacity: 35, avgGrade: 75, attendance: 91, subjects: 8 },
  { id: "CLS003", name: "SS3 Arts", teacher: "Mr. Kwesi Mensah", students: 28, capacity: 35, avgGrade: 72, attendance: 89, subjects: 7 },
  { id: "CLS004", name: "SS2 Science A", teacher: "Mrs. Aisha Mohammed", students: 34, capacity: 35, avgGrade: 80, attendance: 95, subjects: 8 },
  { id: "CLS005", name: "SS2 Commercial", teacher: "Mr. Emmanuel Asare", students: 31, capacity: 35, avgGrade: 74, attendance: 92, subjects: 7 },
  { id: "CLS006", name: "SS1 Science", teacher: "Ms. Fatou Diallo", students: 33, capacity: 35, avgGrade: 76, attendance: 93, subjects: 8 },
  { id: "CLS007", name: "JSS3 A", teacher: "Mr. Kwesi Mensah", students: 35, capacity: 40, avgGrade: 71, attendance: 88, subjects: 10 },
  { id: "CLS008", name: "JSS3 B", teacher: "Mrs. Aisha Mohammed", students: 38, capacity: 40, avgGrade: 69, attendance: 86, subjects: 10 },
  { id: "CLS009", name: "JSS2 A", teacher: "Dr. Ngozi Adichie", students: 36, capacity: 40, avgGrade: 73, attendance: 90, subjects: 10 },
  { id: "CLS010", name: "JSS1 A", teacher: "Ms. Fatou Diallo", students: 40, capacity: 40, avgGrade: 68, attendance: 87, subjects: 10 },
]

const seniorClasses = classes.filter(c => c.name.startsWith("SS"))
const juniorClasses = classes.filter(c => c.name.startsWith("JSS"))

export default function ClassesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filterClasses = (classList: typeof classes) => {
    return classList.filter(c => 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.teacher.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Classes</h1>
          <p className="text-muted-foreground">Manage class sections and assignments</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Class
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Class</DialogTitle>
              <DialogDescription>Set up a new class section for your school.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="className">Class name</Label>
                <Input id="className" placeholder="e.g., SS3 Science C" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="level">Level</Label>
                  <Select>
                    <SelectTrigger id="level">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ss3">SS3</SelectItem>
                      <SelectItem value="ss2">SS2</SelectItem>
                      <SelectItem value="ss1">SS1</SelectItem>
                      <SelectItem value="jss3">JSS3</SelectItem>
                      <SelectItem value="jss2">JSS2</SelectItem>
                      <SelectItem value="jss1">JSS1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="track">Track</Label>
                  <Select>
                    <SelectTrigger id="track">
                      <SelectValue placeholder="Select track" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="arts">Arts</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="classTeacher">Class Teacher</Label>
                <Select>
                  <SelectTrigger id="classTeacher">
                    <SelectValue placeholder="Assign a teacher" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ngozi">Dr. Ngozi Adichie</SelectItem>
                    <SelectItem value="kwesi">Mr. Kwesi Mensah</SelectItem>
                    <SelectItem value="aisha">Mrs. Aisha Mohammed</SelectItem>
                    <SelectItem value="david">Mr. David Okafor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity">Capacity</Label>
                <Input id="capacity" type="number" placeholder="35" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Create Class</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Classes</p>
              <p className="text-2xl font-bold">{classes.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <Users className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Enrollment</p>
              <p className="text-2xl font-bold">{classes.reduce((acc, c) => acc + c.students, 0)}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <TrendingUp className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. Grade</p>
              <p className="text-2xl font-bold">{Math.round(classes.reduce((acc, c) => acc + c.avgGrade, 0) / classes.length)}%</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <Clock className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. Attendance</p>
              <p className="text-2xl font-bold">{Math.round(classes.reduce((acc, c) => acc + c.attendance, 0) / classes.length)}%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search classes or teachers..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="senior" className="space-y-4">
        <TabsList>
          <TabsTrigger value="senior">Senior Secondary ({seniorClasses.length})</TabsTrigger>
          <TabsTrigger value="junior">Junior Secondary ({juniorClasses.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="senior" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filterClasses(seniorClasses).map((classItem) => (
              <ClassCard key={classItem.id} classData={classItem} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="junior" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filterClasses(juniorClasses).map((classItem) => (
              <ClassCard key={classItem.id} classData={classItem} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ClassCard({ classData }: { classData: typeof classes[0] }) {
  const capacityPercent = (classData.students / classData.capacity) * 100

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{classData.name}</CardTitle>
            <CardDescription>{classData.teacher}</CardDescription>
          </div>
          <Badge variant={capacityPercent >= 95 ? "destructive" : capacityPercent >= 80 ? "secondary" : "outline"}>
            {classData.students}/{classData.capacity}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Capacity</span>
            <span>{Math.round(capacityPercent)}%</span>
          </div>
          <Progress value={capacityPercent} className="h-2" />
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-muted/50 p-2">
            <p className="text-lg font-semibold text-secondary">{classData.avgGrade}%</p>
            <p className="text-xs text-muted-foreground">Avg Grade</p>
          </div>
          <div className="rounded-lg bg-muted/50 p-2">
            <p className="text-lg font-semibold">{classData.attendance}%</p>
            <p className="text-xs text-muted-foreground">Attendance</p>
          </div>
          <div className="rounded-lg bg-muted/50 p-2">
            <p className="text-lg font-semibold">{classData.subjects}</p>
            <p className="text-xs text-muted-foreground">Subjects</p>
          </div>
        </div>

        <Link href={`/dashboard/admin/classes/${classData.id}`}>
          <Button variant="ghost" className="w-full justify-between" size="sm">
            View Details
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
