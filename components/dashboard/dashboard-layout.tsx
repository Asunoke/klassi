"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
  role: "admin" | "teacher" | "student" | "parent"
  title: string
}

export function DashboardLayout({ children, role, title }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn("lg:block", sidebarOpen ? "block" : "hidden")}>
        <Sidebar role={role} />
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        <Header title={title} onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  )
}
