"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, BookOpen, Calendar, BarChart3, Bell, MessageSquare } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            <span className="text-sm font-medium">Now serving 500+ schools across Africa</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance"
          >
            The intelligent operating system for{" "}
            <span className="text-primary">modern schools.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty"
          >
            Klassi helps schools manage students, teachers, schedules, grades and communication from one powerful platform.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/dashboard/admin">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12 px-6">
                Start free trial
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2 h-12 px-6">
              <Play className="w-4 h-4" />
              Book a demo
            </Button>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative rounded-xl lg:rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 overflow-hidden">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-secondary/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-background text-xs text-muted-foreground">
                  app.klassi.io/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 lg:p-6 bg-gradient-to-br from-muted/30 to-background">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Stats Cards */}
                <DashboardCard
                  icon={<Users className="w-5 h-5 text-primary" />}
                  label="Total Students"
                  value="2,847"
                  change="+12%"
                />
                <DashboardCard
                  icon={<BookOpen className="w-5 h-5 text-secondary" />}
                  label="Active Classes"
                  value="156"
                  change="+8%"
                />
                <DashboardCard
                  icon={<Calendar className="w-5 h-5 text-accent" />}
                  label="Events This Week"
                  value="24"
                  change="+5%"
                />
                <DashboardCard
                  icon={<BarChart3 className="w-5 h-5 text-primary" />}
                  label="Attendance Rate"
                  value="94.2%"
                  change="+2.1%"
                />
              </div>

              {/* Chart and Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                <div className="lg:col-span-2 rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">Student Enrollment</h3>
                    <span className="text-xs text-muted-foreground">Last 6 months</span>
                  </div>
                  <div className="h-32 flex items-end gap-2">
                    {[40, 55, 45, 70, 65, 85].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full bg-primary/20 rounded-t-sm relative overflow-hidden"
                          style={{ height: `${height}%` }}
                        >
                          <div
                            className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm"
                            style={{ height: `${height * 0.7}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-muted-foreground">
                          {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-4">
                  <h3 className="font-semibold text-foreground mb-3">Recent Activity</h3>
                  <div className="space-y-3">
                    <ActivityItem
                      icon={<Bell className="w-3.5 h-3.5" />}
                      text="New announcement posted"
                      time="2m ago"
                    />
                    <ActivityItem
                      icon={<Users className="w-3.5 h-3.5" />}
                      text="15 new students enrolled"
                      time="1h ago"
                    />
                    <ActivityItem
                      icon={<MessageSquare className="w-3.5 h-3.5" />}
                      text="Parent meeting scheduled"
                      time="3h ago"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -left-4 lg:-left-8 top-1/4 hidden md:block"
          >
            <div className="bg-card border border-border rounded-lg shadow-lg p-3 w-48">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Users className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-xs font-medium text-foreground">Quick Actions</span>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] text-muted-foreground px-2 py-1 rounded bg-muted">Add Student</div>
                <div className="text-[10px] text-muted-foreground px-2 py-1 rounded bg-muted">Create Class</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute -right-4 lg:-right-8 bottom-1/4 hidden md:block"
          >
            <div className="bg-card border border-border rounded-lg shadow-lg p-3 w-48">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-xs font-medium text-foreground">AI Assistant</span>
              </div>
              <p className="text-[10px] text-muted-foreground">
                {"\"Generate report for Grade 5 performance...\""}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function DashboardCard({
  icon,
  label,
  value,
  change,
}: {
  icon: React.ReactNode
  label: string
  value: string
  change: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center justify-between mb-2">
        {icon}
        <span className="text-xs text-secondary font-medium">{change}</span>
      </div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}

function ActivityItem({
  icon,
  text,
  time,
}: {
  icon: React.ReactNode
  text: string
  time: string
}) {
  return (
    <div className="flex items-start gap-2">
      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-muted-foreground shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-foreground truncate">{text}</p>
        <p className="text-[10px] text-muted-foreground">{time}</p>
      </div>
    </div>
  )
}
