"use client"

import { motion } from "framer-motion"
import {
  Users,
  GraduationCap,
  Bell,
  Calendar,
  FileCheck,
  MessageSquare,
  Smartphone,
  Sparkles,
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Student Management",
    description:
      "Complete student profiles with academic history, attendance records, and behavior tracking in one place.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: GraduationCap,
    title: "Teacher Management",
    description:
      "Streamline teacher assignments, schedules, and performance tracking. Simplify payroll and leave management.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Bell,
    title: "Real-time Announcements",
    description:
      "Instantly reach students, teachers, and parents with targeted announcements and emergency alerts.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "AI-powered timetable generation that avoids conflicts and optimizes resource utilization.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: FileCheck,
    title: "Grades & Attendance",
    description:
      "Automated grade calculations, report card generation, and real-time attendance tracking with parent notifications.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: MessageSquare,
    title: "Parent Communication",
    description:
      "Direct messaging between teachers and parents, meeting scheduling, and progress updates.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description:
      "Full-featured mobile apps for iOS and Android. Access everything on the go, anytime, anywhere.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Sparkles,
    title: "AI Assistant",
    description:
      "Coming soon: AI-powered insights, automated report generation, and predictive analytics for student success.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    badge: "Coming Soon",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-medium text-secondary mb-4 block">Features</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Everything you need to run your school
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            From student enrollment to parent communication, Klassi provides all the tools modern schools need to thrive.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl border border-border bg-card p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {feature.badge && (
                <span className="absolute top-4 right-4 text-[10px] font-medium px-2 py-1 rounded-full bg-accent/20 text-accent">
                  {feature.badge}
                </span>
              )}
              <div
                className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}
              >
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
