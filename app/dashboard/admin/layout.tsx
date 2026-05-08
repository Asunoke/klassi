import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard | Klassi",
  description: "School administration dashboard for managing students, teachers, and operations.",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
