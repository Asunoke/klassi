import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Parent Dashboard | Klassi",
  description: "Parent dashboard for monitoring children's grades, attendance, and communicating with teachers.",
}

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
