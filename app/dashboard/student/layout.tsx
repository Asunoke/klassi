import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Student Dashboard | Klassi",
  description: "Student dashboard for viewing grades, schedule, assignments, and announcements.",
}

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
