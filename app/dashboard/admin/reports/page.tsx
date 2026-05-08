"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, TrendingUp, Users, GraduationCap, BarChart3, PieChart, Calendar } from "lucide-react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart as RePieChart, Pie, Cell, BarChart, Bar, Legend } from "recharts"

const performanceData = [
  { term: "Term 1 2023", avgScore: 68, passRate: 82 },
  { term: "Term 2 2023", avgScore: 71, passRate: 85 },
  { term: "Term 3 2023", avgScore: 69, passRate: 83 },
  { term: "Term 1 2024", avgScore: 73, passRate: 87 },
  { term: "Term 2 2024", avgScore: 75, passRate: 89 },
  { term: "Term 3 2024", avgScore: 76, passRate: 91 },
]

const subjectPerformance = [
  { subject: "Mathematics", avg: 72, pass: 85 },
  { subject: "English", avg: 78, pass: 92 },
  { subject: "Physics", avg: 70, pass: 82 },
  { subject: "Chemistry", avg: 68, pass: 79 },
  { subject: "Biology", avg: 75, pass: 88 },
  { subject: "History", avg: 80, pass: 94 },
]

const gradeDistribution = [
  { name: "A (75-100)", value: 245, color: "hsl(var(--secondary))" },
  { name: "B (60-74)", value: 412, color: "hsl(var(--primary))" },
  { name: "C (50-59)", value: 356, color: "hsl(var(--accent))" },
  { name: "D (40-49)", value: 167, color: "hsl(var(--muted-foreground))" },
  { name: "F (0-39)", value: 67, color: "hsl(var(--destructive))" },
]

const reportTemplates = [
  { id: 1, name: "Term Report Card", description: "Complete student performance report", icon: FileText, downloads: 1247 },
  { id: 2, name: "Class Performance Summary", description: "Aggregate class statistics", icon: BarChart3, downloads: 523 },
  { id: 3, name: "Attendance Report", description: "Monthly attendance analysis", icon: Calendar, downloads: 892 },
  { id: 4, name: "Teacher Performance", description: "Teaching effectiveness metrics", icon: Users, downloads: 156 },
  { id: 5, name: "Subject Analysis", description: "Subject-wise performance breakdown", icon: PieChart, downloads: 341 },
  { id: 6, name: "Graduation Readiness", description: "SS3 student preparedness report", icon: GraduationCap, downloads: 89 },
]

export default function ReportsPage() {
  const [selectedTerm, setSelectedTerm] = useState("term3-2024")
  const [selectedClass, setSelectedClass] = useState("all")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">Generate and analyze school performance reports</p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedTerm} onValueChange={setSelectedTerm}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select term" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="term3-2024">Term 3 2024</SelectItem>
              <SelectItem value="term2-2024">Term 2 2024</SelectItem>
              <SelectItem value="term1-2024">Term 1 2024</SelectItem>
              <SelectItem value="term3-2023">Term 3 2023</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              <SelectItem value="ss3">SS3</SelectItem>
              <SelectItem value="ss2">SS2</SelectItem>
              <SelectItem value="ss1">SS1</SelectItem>
              <SelectItem value="jss">JSS</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <TrendingUp className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. Score</p>
              <p className="text-2xl font-bold">76%</p>
              <p className="text-xs text-secondary">+3% from last term</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pass Rate</p>
              <p className="text-2xl font-bold">91%</p>
              <p className="text-xs text-secondary">+2% from last term</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <GraduationCap className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Top Performers</p>
              <p className="text-2xl font-bold">245</p>
              <p className="text-xs text-muted-foreground">A grade students</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
              <FileText className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Need Support</p>
              <p className="text-2xl font-bold">67</p>
              <p className="text-xs text-muted-foreground">Below pass mark</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="analytics" className="space-y-4">
        <TabsList>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="templates">Report Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="space-y-6">
          {/* Performance Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Trend</CardTitle>
              <CardDescription>Average score and pass rate over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="term" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="avgScore" stroke="hsl(var(--primary))" strokeWidth={2} name="Average Score %" dot={{ fill: "hsl(var(--primary))" }} />
                    <Line type="monotone" dataKey="passRate" stroke="hsl(var(--secondary))" strokeWidth={2} name="Pass Rate %" dot={{ fill: "hsl(var(--secondary))" }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Subject Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Subject Performance</CardTitle>
                <CardDescription>Average scores by subject this term</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={subjectPerformance} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis type="number" domain={[0, 100]} className="text-xs" />
                      <YAxis dataKey="subject" type="category" className="text-xs" width={80} />
                      <Tooltip
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px"
                        }}
                      />
                      <Bar dataKey="avg" fill="hsl(var(--primary))" name="Average %" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Grade Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Grade Distribution</CardTitle>
                <CardDescription>Student grades breakdown this term</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RePieChart>
                      <Pie
                        data={gradeDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {gradeDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px"
                        }}
                        formatter={(value: number) => [`${value} students`, ""]}
                      />
                    </RePieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reportTemplates.map((template) => (
              <Card key={template.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <template.icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {template.downloads} generated
                    </Badge>
                  </div>
                  <CardTitle className="text-base mt-3">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Generate Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
