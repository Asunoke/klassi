"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Search, Plus, MoreHorizontal, Mail, Phone, Users, BookOpen, Award, Clock } from "lucide-react"

const teachers = [
  { id: "TCH001", name: "Dr. Ngozi Adichie", email: "ngozi.a@school.edu", phone: "+234 801 234 5678", department: "Sciences", subjects: ["Physics", "Mathematics"], classes: 4, students: 120, status: "Active", yearsExp: 12 },
  { id: "TCH002", name: "Mr. Kwesi Mensah", email: "kwesi.m@school.edu", phone: "+233 244 567 890", department: "Languages", subjects: ["English", "Literature"], classes: 5, students: 145, status: "Active", yearsExp: 8 },
  { id: "TCH003", name: "Mrs. Aisha Mohammed", email: "aisha.m@school.edu", phone: "+234 802 345 6789", department: "Humanities", subjects: ["History", "Government"], classes: 4, students: 110, status: "Active", yearsExp: 15 },
  { id: "TCH004", name: "Mr. David Okafor", email: "david.o@school.edu", phone: "+234 803 456 7890", department: "Sciences", subjects: ["Chemistry", "Biology"], classes: 3, students: 90, status: "On Leave", yearsExp: 6 },
  { id: "TCH005", name: "Ms. Fatou Diallo", email: "fatou.d@school.edu", phone: "+221 77 456 7890", department: "Arts", subjects: ["Fine Art", "Music"], classes: 6, students: 180, status: "Active", yearsExp: 10 },
  { id: "TCH006", name: "Mr. Emmanuel Asare", email: "emmanuel.a@school.edu", phone: "+233 245 678 901", department: "Commercial", subjects: ["Economics", "Commerce"], classes: 4, students: 115, status: "Active", yearsExp: 7 },
]

export default function TeachersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         teacher.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         teacher.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesDepartment = departmentFilter === "all" || teacher.department === departmentFilter
    return matchesSearch && matchesDepartment
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Teachers</h1>
          <p className="text-muted-foreground">Manage your teaching staff</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Teacher
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Teacher</DialogTitle>
              <DialogDescription>Send an invitation to join your school on Klassi.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="teacherFirst">First name</Label>
                  <Input id="teacherFirst" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teacherLast">Last name</Label>
                  <Input id="teacherLast" placeholder="Enter last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="teacherEmail">Email</Label>
                <Input id="teacherEmail" type="email" placeholder="teacher@school.edu" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="teacherPhone">Phone</Label>
                <Input id="teacherPhone" type="tel" placeholder="+234 800 000 0000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="teacherDept">Department</Label>
                <Select>
                  <SelectTrigger id="teacherDept">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sciences">Sciences</SelectItem>
                    <SelectItem value="languages">Languages</SelectItem>
                    <SelectItem value="humanities">Humanities</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="arts">Arts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Send Invitation</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Teachers</p>
              <p className="text-2xl font-bold">48</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <BookOpen className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Departments</p>
              <p className="text-2xl font-bold">5</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Award className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. Experience</p>
              <p className="text-2xl font-bold">8.5 yrs</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <Clock className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">On Leave</p>
              <p className="text-2xl font-bold">2</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search teachers or subjects..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            <SelectItem value="Sciences">Sciences</SelectItem>
            <SelectItem value="Languages">Languages</SelectItem>
            <SelectItem value="Humanities">Humanities</SelectItem>
            <SelectItem value="Commercial">Commercial</SelectItem>
            <SelectItem value="Arts">Arts</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Teacher Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTeachers.map((teacher) => (
          <Card key={teacher.id} className="relative">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {teacher.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{teacher.name}</CardTitle>
                    <CardDescription>{teacher.department}</CardDescription>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Edit Details</DropdownMenuItem>
                    <DropdownMenuItem>View Schedule</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {teacher.subjects.map((subject) => (
                  <Badge key={subject} variant="secondary" className="text-xs">
                    {subject}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-muted/50 p-2">
                  <p className="text-lg font-semibold">{teacher.classes}</p>
                  <p className="text-xs text-muted-foreground">Classes</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-2">
                  <p className="text-lg font-semibold">{teacher.students}</p>
                  <p className="text-xs text-muted-foreground">Students</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-2">
                  <p className="text-lg font-semibold">{teacher.yearsExp}</p>
                  <p className="text-xs text-muted-foreground">Years</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <Badge variant={teacher.status === "Active" ? "default" : "outline"}>
                  {teacher.status}
                </Badge>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <a href={`mailto:${teacher.email}`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <a href={`tel:${teacher.phone}`}>
                      <Phone className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
