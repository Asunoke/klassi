import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function DashboardRoot() {
    // We use native fetch to call our API route since Prisma/Better Auth might have edge issues if we call auth directly here.
    // Alternatively, we could read from a database, but we just need the role.
    
    // Actually, in a Server Component, we can fetch from our own API route.
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const requestHeaders = await headers();
    
    try {
        const response = await fetch(`${baseUrl}/api/auth/get-session`, {
            headers: {
                cookie: requestHeaders.get("cookie") || "",
            },
            cache: "no-store"
        });
        
        if (response.ok) {
            const session = await response.json();
            if (session?.user?.role) {
                const role = session.user.role.toLowerCase();
                
                // Route based on role
                if (role === "super_admin" || role === "admin") {
                    redirect("/dashboard/admin");
                } else if (role === "teacher") {
                    redirect("/dashboard/teacher");
                } else if (role === "student") {
                    redirect("/dashboard/student");
                } else if (role === "parent") {
                    redirect("/dashboard/parent");
                }
            }
        }
    } catch (e) {
        console.error("Failed to fetch session in dashboard root", e);
    }
    
    // Fallback if role is not found or recognized
    redirect("/login");
}
