import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon: LucideIcon
  iconColor?: string
  iconBgColor?: string
}

export function StatCard({
  title,
  value,
  change,
  changeType = "positive",
  icon: Icon,
  iconColor = "text-primary",
  iconBgColor = "bg-primary/10",
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", iconBgColor)}>
          <Icon className={cn("w-6 h-6", iconColor)} />
        </div>
        {change && (
          <span
            className={cn(
              "text-xs font-medium px-2 py-1 rounded-full",
              changeType === "positive" && "bg-secondary/20 text-secondary",
              changeType === "negative" && "bg-destructive/20 text-destructive",
              changeType === "neutral" && "bg-muted text-muted-foreground"
            )}
          >
            {change}
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-3xl font-bold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground mt-1">{title}</p>
      </div>
    </div>
  )
}
