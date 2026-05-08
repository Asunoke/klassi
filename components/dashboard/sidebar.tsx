"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  BookOpen,
  Calendar,
  FileText,
  Bell,
  MessageSquare,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  role: "admin" | "teacher" | "student" | "parent"
}

const adminNav = [
  { label: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
  { label: "Students", href: "/dashboard/admin/students", icon: Users },
  { label: "Teachers", href: "/dashboard/admin/teachers", icon: BookOpen },
  { label: "Classes", href: "/dashboard/admin/classes", icon: GraduationCap },
  { label: "Schedule", href: "/dashboard/admin/schedule", icon: Calendar },
  { label: "Announcements", href: "/dashboard/admin/announcements", icon: Bell },
  { label: "Reports", href: "/dashboard/admin/reports", icon: FileText },
  { label: "Messages", href: "/dashboard/admin/messages", icon: MessageSquare },
  { label: "Settings", href: "/dashboard/admin/settings", icon: Settings },
]

const teacherNav = [
  { label: "Dashboard", href: "/dashboard/teacher", icon: LayoutDashboard },
  { label: "My Classes", href: "/dashboard/teacher/classes", icon: BookOpen },
  { label: "Students", href: "/dashboard/teacher/students", icon: Users },
  { label: "Schedule", href: "/dashboard/teacher/schedule", icon: Calendar },
  { label: "Grades", href: "/dashboard/teacher/grades", icon: FileText },
  { label: "Attendance", href: "/dashboard/teacher/attendance", icon: GraduationCap },
  { label: "Announcements", href: "/dashboard/teacher/announcements", icon: Bell },
  { label: "Messages", href: "/dashboard/teacher/messages", icon: MessageSquare },
]

const studentNav = [
  { label: "Dashboard", href: "/dashboard/student", icon: LayoutDashboard },
  { label: "My Classes", href: "/dashboard/student/classes", icon: BookOpen },
  { label: "Schedule", href: "/dashboard/student/schedule", icon: Calendar },
  { label: "Grades", href: "/dashboard/student/grades", icon: FileText },
  { label: "Attendance", href: "/dashboard/student/attendance", icon: GraduationCap },
  { label: "Announcements", href: "/dashboard/student/announcements", icon: Bell },
  { label: "Messages", href: "/dashboard/student/messages", icon: MessageSquare },
]

const parentNav = [
  { label: "Dashboard", href: "/dashboard/parent", icon: LayoutDashboard },
  { label: "Children", href: "/dashboard/parent/children", icon: Users },
  { label: "Grades", href: "/dashboard/parent/grades", icon: FileText },
  { label: "Attendance", href: "/dashboard/parent/attendance", icon: GraduationCap },
  { label: "Schedule", href: "/dashboard/parent/schedule", icon: Calendar },
  { label: "Announcements", href: "/dashboard/parent/announcements", icon: Bell },
  { label: "Messages", href: "/dashboard/parent/messages", icon: MessageSquare },
]

const navMap = {
  admin: adminNav,
  teacher: teacherNav,
  student: studentNav,
  parent: parentNav,
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const navigation = navMap[role]

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen border-r border-sidebar-border bg-sidebar transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-sidebar-primary">
              <GraduationCap className="w-5 h-5 text-sidebar-primary-foreground" />
            </div>
            {!collapsed && (
              <span className="text-lg font-bold text-sidebar-foreground">Klassi</span>
            )}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex text-sidebar-foreground"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                )}
              >
                <item.icon className={cn("w-5 h-5 shrink-0", isActive && "text-sidebar-primary")} />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        {/* User Section */}
        <div className="p-3 border-t border-sidebar-border">
          <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
            <div className="w-9 h-9 rounded-full bg-sidebar-primary/20 flex items-center justify-center">
              <span className="text-sm font-semibold text-sidebar-primary">
                {role === "admin" ? "AD" : role === "teacher" ? "TC" : role === "student" ? "ST" : "PR"}
              </span>
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">
                  {role === "admin" ? "Admin User" : role === "teacher" ? "Teacher User" : role === "student" ? "Student User" : "Parent User"}
                </p>
                <p className="text-xs text-sidebar-foreground/60 truncate capitalize">{role}</p>
              </div>
            )}
          </div>
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 mt-2 rounded-lg text-sm font-medium text-sidebar-foreground/70 hover:bg-destructive/10 hover:text-destructive transition-colors",
              collapsed && "justify-center"
            )}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {!collapsed && <span>Logout</span>}
          </Link>
        </div>
      </div>
    </aside>
  )
}
