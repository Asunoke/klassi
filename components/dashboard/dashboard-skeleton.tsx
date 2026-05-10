import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Skeleton } from "@/components/ui/skeleton"

interface DashboardSkeletonProps {
  role: "admin" | "teacher" | "student" | "parent"
  title: string
}

export function DashboardSkeleton({ role, title }: DashboardSkeletonProps) {
  return (
    <DashboardLayout role={role} title={title}>
      {/* Top Stats Row Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-xl border bg-card text-card-foreground shadow p-6 flex flex-col justify-between h-[120px]">
            <div className="flex justify-between items-start">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-10 w-10 rounded-lg" />
            </div>
            <div className="space-y-2 mt-4">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <div className="rounded-xl border bg-card text-card-foreground shadow p-6 h-[400px] flex flex-col">
            <Skeleton className="h-6 w-48 mb-4" />
            <Skeleton className="h-full w-full rounded-md" />
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="rounded-xl border bg-card text-card-foreground shadow p-6 h-[400px] flex flex-col">
            <Skeleton className="h-6 w-32 mb-4" />
            <div className="space-y-4 flex-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-3 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Area Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="rounded-xl border bg-card text-card-foreground shadow p-6 h-[300px]">
            <Skeleton className="h-6 w-40 mb-4" />
            <div className="space-y-4">
              <Skeleton className="h-16 w-full rounded-md" />
              <Skeleton className="h-16 w-full rounded-md" />
              <Skeleton className="h-16 w-full rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}
