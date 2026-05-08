"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Save, Upload, Download, Calculator, TrendingUp, TrendingDown } from "lucide-react"

const students = [
  { id: "STU001", name: "Adaeze Okonkwo", ca1: 18, ca2: 17, ca3: 19, exam: 58, total: 0, grade: "", trend: "up" },
  { id: "STU002", name: "Chidi Nwachukwu", ca1: 15, ca2: 14, ca3: 16, exam: 52, total: 0, grade: "", trend: "down" },
  { id: "STU003", name: "Fatima Ibrahim", ca1: 20, ca2: 19, ca3: 20, exam: 62, total: 0, grade: "", trend: "up" },
  { id: "STU004", name: "Kwame Asante", ca1: 12, ca2: 13, ca3: 14, exam: 45, total: 0, grade: "", trend: "same" },
  { id: "STU005", name: "Amina Yusuf", ca1: 16, ca2: 17, ca3: 15, exam: 50, total: 0, grade: "", trend: "up" },
  { id: "STU006", name: "Emeka Obi", ca1: 14, ca2: 15, ca3: 16, exam: 48, total: 0, grade: "", trend: "down" },
  { id: "STU007", name: "Blessing Adeyemi", ca1: 19, ca2: 18, ca3: 19, exam: 60, total: 0, grade: "", trend: "up" },
  { id: "STU008", name: "David Okafor", ca1: 11, ca2: 12, ca3: 13, exam: 42, total: 0, grade: "", trend: "down" },
].map(s => {
  const total = s.ca1 + s.ca2 + s.ca3 + s.exam
  let grade = "F"
  if (total >= 75) grade = "A"
  else if (total >= 60) grade = "B"
  else if (total >= 50) grade = "C"
  else if (total >= 40) grade = "D"
  return { ...s, total, grade }
})

export default function GradesPage() {
  const [selectedClass, setSelectedClass] = useState("ss3-physics")
  const [searchQuery, setSearchQuery] = useState("")
  const [editingStudent, setEditingStudent] = useState<string | null>(null)

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const classAverage = Math.round(students.reduce((acc, s) => acc + s.total, 0) / students.length)
  const passRate = Math.round((students.filter(s => s.total >= 50).length / students.length) * 100)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Grades</h1>
          <p className="text-muted-foreground">Record and manage student grades</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <Save className="mr-2 h-4 w-4" />
            Save All
          </Button>
        </div>
      </div>

      {/* Class Selection and Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="sm:col-span-2 lg:col-span-1">
          <CardContent className="p-6">
            <Label className="text-sm text-muted-foreground">Select Class</Label>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ss3-physics">SS3 - Physics</SelectItem>
                <SelectItem value="ss3-math">SS3 - Mathematics</SelectItem>
                <SelectItem value="ss2-physics">SS2 - Physics</SelectItem>
                <SelectItem value="ss2-math">SS2 - Mathematics</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Class Average</p>
              <p className="text-2xl font-bold">{classAverage}%</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <TrendingUp className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pass Rate</p>
              <p className="text-2xl font-bold">{passRate}%</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <TrendingDown className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Need Support</p>
              <p className="text-2xl font-bold">{students.filter(s => s.total < 50).length}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grades Table */}
      <Card>
        <CardHeader>
          <CardTitle>Student Grades - Physics (SS3)</CardTitle>
          <CardDescription>CA1, CA2, CA3 (10 marks each) + Exam (70 marks) = Total (100)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search students..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead className="text-center w-[80px]">CA1 (10)</TableHead>
                  <TableHead className="text-center w-[80px]">CA2 (10)</TableHead>
                  <TableHead className="text-center w-[80px]">CA3 (10)</TableHead>
                  <TableHead className="text-center w-[80px]">Exam (70)</TableHead>
                  <TableHead className="text-center w-[80px]">Total</TableHead>
                  <TableHead className="text-center w-[80px]">Grade</TableHead>
                  <TableHead className="text-center w-[80px]">Trend</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
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
                    <TableCell className="text-center">
                      {editingStudent === student.id ? (
                        <Input type="number" className="w-16 h-8 text-center" defaultValue={student.ca1} max={10} min={0} />
                      ) : (
                        student.ca1
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {editingStudent === student.id ? (
                        <Input type="number" className="w-16 h-8 text-center" defaultValue={student.ca2} max={10} min={0} />
                      ) : (
                        student.ca2
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {editingStudent === student.id ? (
                        <Input type="number" className="w-16 h-8 text-center" defaultValue={student.ca3} max={10} min={0} />
                      ) : (
                        student.ca3
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {editingStudent === student.id ? (
                        <Input type="number" className="w-16 h-8 text-center" defaultValue={student.exam} max={70} min={0} />
                      ) : (
                        student.exam
                      )}
                    </TableCell>
                    <TableCell className="text-center font-bold">{student.total}</TableCell>
                    <TableCell className="text-center">
                      <Badge 
                        variant={
                          student.grade === "A" ? "default" : 
                          student.grade === "B" ? "secondary" : 
                          student.grade === "F" ? "destructive" : "outline"
                        }
                      >
                        {student.grade}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      {student.trend === "up" && <TrendingUp className="h-4 w-4 text-secondary mx-auto" />}
                      {student.trend === "down" && <TrendingDown className="h-4 w-4 text-destructive mx-auto" />}
                      {student.trend === "same" && <span className="text-muted-foreground">—</span>}
                    </TableCell>
                    <TableCell>
                      {editingStudent === student.id ? (
                        <Button size="sm" onClick={() => setEditingStudent(null)}>
                          <Save className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" onClick={() => setEditingStudent(student.id)}>
                          Edit
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>A: 75-100</span>
              <span>B: 60-74</span>
              <span>C: 50-59</span>
              <span>D: 40-49</span>
              <span>F: 0-39</span>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">Add Single Grade</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Grade</DialogTitle>
                  <DialogDescription>Enter grades for a single assessment</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label>Assessment Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select assessment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ca1">CA 1</SelectItem>
                        <SelectItem value="ca2">CA 2</SelectItem>
                        <SelectItem value="ca3">CA 3</SelectItem>
                        <SelectItem value="exam">Examination</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Student</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select student" />
                      </SelectTrigger>
                      <SelectContent>
                        {students.map(s => (
                          <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Score</Label>
                    <Input type="number" placeholder="Enter score" />
                  </div>
                </div>
                <DialogFooter>
                  <Button>Save Grade</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
