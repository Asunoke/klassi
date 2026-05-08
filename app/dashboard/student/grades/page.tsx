"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Download, TrendingUp, TrendingDown, Award, Target } from "lucide-react"
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const currentTermGrades = [
  { subject: "Physics", ca1: 18, ca2: 17, ca3: 19, exam: 58, total: 112, grade: "A-", max: 130 },
  { subject: "Mathematics", ca1: 20, ca2: 19, ca3: 18, exam: 62, total: 119, grade: "A", max: 130 },
  { subject: "Chemistry", ca1: 15, ca2: 16, ca3: 17, exam: 52, total: 100, grade: "B+", max: 130 },
  { subject: "Biology", ca1: 17, ca2: 18, ca3: 16, exam: 55, total: 106, grade: "A-", max: 130 },
  { subject: "English", ca1: 19, ca2: 20, ca3: 19, exam: 60, total: 118, grade: "A", max: 130 },
  { subject: "Literature", ca1: 18, ca2: 17, ca3: 18, exam: 57, total: 110, grade: "A-", max: 130 },
  { subject: "History", ca1: 14, ca2: 15, ca3: 16, exam: 50, total: 95, grade: "B", max: 130 },
  { subject: "Government", ca1: 16, ca2: 17, ca3: 17, exam: 54, total: 104, grade: "B+", max: 130 },
]

const radarData = currentTermGrades.map(g => ({
  subject: g.subject.slice(0, 4),
  score: Math.round((g.total / g.max) * 100),
  fullMark: 100
}))

const termProgress = [
  { term: "T1 2023", gpa: 3.2 },
  { term: "T2 2023", gpa: 3.4 },
  { term: "T3 2023", gpa: 3.5 },
  { term: "T1 2024", gpa: 3.6 },
  { term: "T2 2024", gpa: 3.7 },
  { term: "T3 2024", gpa: 3.8 },
]

export default function StudentGradesPage() {
  const totalScore = currentTermGrades.reduce((acc, g) => acc + g.total, 0)
  const maxScore = currentTermGrades.reduce((acc, g) => acc + g.max, 0)
  const percentage = Math.round((totalScore / maxScore) * 100)
  const gpa = 3.8

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Grades</h1>
          <p className="text-muted-foreground">Academic performance and progress</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download Report Card
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current GPA</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold">{gpa}</p>
                <TrendingUp className="h-4 w-4 text-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <Target className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Average Score</p>
              <p className="text-2xl font-bold">{percentage}%</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <TrendingUp className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Class Rank</p>
              <p className="text-2xl font-bold">3rd / 32</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <Award className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Best Subject</p>
              <p className="text-lg font-bold">Mathematics</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="current" className="space-y-4">
        <TabsList>
          <TabsTrigger value="current">Current Term</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Term 3, 2024 Results</CardTitle>
              <CardDescription>Detailed breakdown of your grades this term</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead className="text-center">CA1 (20)</TableHead>
                    <TableHead className="text-center">CA2 (20)</TableHead>
                    <TableHead className="text-center">CA3 (20)</TableHead>
                    <TableHead className="text-center">Exam (70)</TableHead>
                    <TableHead className="text-center">Total (130)</TableHead>
                    <TableHead className="text-center">Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentTermGrades.map((grade) => (
                    <TableRow key={grade.subject}>
                      <TableCell className="font-medium">{grade.subject}</TableCell>
                      <TableCell className="text-center">{grade.ca1}</TableCell>
                      <TableCell className="text-center">{grade.ca2}</TableCell>
                      <TableCell className="text-center">{grade.ca3}</TableCell>
                      <TableCell className="text-center">{grade.exam}</TableCell>
                      <TableCell className="text-center font-bold">{grade.total}</TableCell>
                      <TableCell className="text-center">
                        <Badge 
                          variant={
                            grade.grade.startsWith("A") ? "default" : 
                            grade.grade.startsWith("B") ? "secondary" : "outline"
                          }
                        >
                          {grade.grade}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-muted/50 font-bold">
                    <TableCell>Total</TableCell>
                    <TableCell className="text-center">{currentTermGrades.reduce((a, g) => a + g.ca1, 0)}</TableCell>
                    <TableCell className="text-center">{currentTermGrades.reduce((a, g) => a + g.ca2, 0)}</TableCell>
                    <TableCell className="text-center">{currentTermGrades.reduce((a, g) => a + g.ca3, 0)}</TableCell>
                    <TableCell className="text-center">{currentTermGrades.reduce((a, g) => a + g.exam, 0)}</TableCell>
                    <TableCell className="text-center">{totalScore}</TableCell>
                    <TableCell className="text-center">
                      <Badge>GPA {gpa}</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>GPA Progress</CardTitle>
              <CardDescription>Your academic performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={termProgress}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="term" className="text-xs" />
                    <YAxis domain={[2, 4]} className="text-xs" />
                    <Tooltip
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="gpa" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Performance Radar</CardTitle>
                <CardDescription>Subject-wise performance comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                      <PolarGrid className="stroke-muted" />
                      <PolarAngleAxis dataKey="subject" className="text-xs" />
                      <Radar
                        name="Score"
                        dataKey="score"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.5}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subject Strength Analysis</CardTitle>
                <CardDescription>Performance breakdown by subject</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentTermGrades.sort((a, b) => b.total - a.total).map((grade) => {
                  const percent = Math.round((grade.total / grade.max) * 100)
                  return (
                    <div key={grade.subject} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{grade.subject}</span>
                        <span className="text-sm text-muted-foreground">{percent}%</span>
                      </div>
                      <Progress 
                        value={percent} 
                        className="h-2"
                      />
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
