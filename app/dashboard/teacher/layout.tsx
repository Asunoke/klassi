import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Teacher Dashboard | Klassi",
  description: "Teacher dashboard for managing classes, students, grades, and assignments.",
}

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
