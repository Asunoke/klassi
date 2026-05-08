"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Mail, ArrowLeft, CheckCircle2 } from "lucide-react"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground">Klassi</span>
        </Link>

        <Card className="border-0 shadow-xl">
          {!isSubmitted ? (
            <>
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-bold">Forgot password?</CardTitle>
                <CardDescription>
                  {"No worries, we'll send you reset instructions."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Reset password"}
                  </Button>
                </form>
              </CardContent>
            </>
          ) : (
            <>
              <CardHeader className="space-y-1 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                  <CheckCircle2 className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-bold">Check your email</CardTitle>
                <CardDescription>
                  We sent a password reset link to{" "}
                  <span className="font-medium text-foreground">{email}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full">
                  <a href={`mailto:${email}`}>Open email app</a>
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  {"Didn't receive the email? "}
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary hover:underline font-medium"
                  >
                    Click to resend
                  </button>
                </p>
              </CardContent>
            </>
          )}
          <CardFooter>
            <Link 
              href="/login" 
              className="flex items-center justify-center gap-2 w-full text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to login
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
