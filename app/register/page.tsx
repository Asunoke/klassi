"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { GraduationCap, Eye, EyeOff, Mail, Lock, User, Building, Phone, Check } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [accountType, setAccountType] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
      return
    }
    
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    router.push("/login")
    setIsLoading(false)
  }

  const passwordRequirements = [
    { text: "At least 8 characters", met: true },
    { text: "One uppercase letter", met: true },
    { text: "One number", met: true },
    { text: "One special character", met: false },
  ]

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground">Klassi</span>
        </Link>

        <Card className="border-0 shadow-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
            <CardDescription>
              {step === 1 ? "Enter your information to get started" : "Complete your school registration"}
            </CardDescription>
            {/* Progress indicator */}
            <div className="flex items-center justify-center gap-2 pt-4">
              <div className={`h-2 w-16 rounded-full ${step >= 1 ? "bg-primary" : "bg-muted"}`} />
              <div className={`h-2 w-16 rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="accountType">Account type</Label>
                    <Select value={accountType} onValueChange={setAccountType} required>
                      <SelectTrigger id="accountType">
                        <SelectValue placeholder="Select account type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="school">School Administrator</SelectItem>
                        <SelectItem value="teacher">Teacher (Invited)</SelectItem>
                        <SelectItem value="student">Student (Invited)</SelectItem>
                        <SelectItem value="parent">Parent (Invited)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="firstName" placeholder="John" className="pl-10" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="email" type="email" placeholder="name@school.edu" className="pl-10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="phone" type="tel" placeholder="+234 800 000 0000" className="pl-10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {passwordRequirements.map((req, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs">
                          <div className={`h-3.5 w-3.5 rounded-full flex items-center justify-center ${req.met ? "bg-secondary text-secondary-foreground" : "bg-muted"}`}>
                            {req.met && <Check className="h-2.5 w-2.5" />}
                          </div>
                          <span className={req.met ? "text-foreground" : "text-muted-foreground"}>{req.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="schoolName">School name</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="schoolName" placeholder="Lagos Academy" className="pl-10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="schoolType">School type</Label>
                    <Select required>
                      <SelectTrigger id="schoolType">
                        <SelectValue placeholder="Select school type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="primary">Primary School</SelectItem>
                        <SelectItem value="secondary">Secondary School</SelectItem>
                        <SelectItem value="combined">Combined (Primary & Secondary)</SelectItem>
                        <SelectItem value="vocational">Vocational/Technical</SelectItem>
                        <SelectItem value="international">International School</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select required>
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ng">Nigeria</SelectItem>
                        <SelectItem value="ke">Kenya</SelectItem>
                        <SelectItem value="gh">Ghana</SelectItem>
                        <SelectItem value="za">South Africa</SelectItem>
                        <SelectItem value="eg">Egypt</SelectItem>
                        <SelectItem value="tz">Tanzania</SelectItem>
                        <SelectItem value="ug">Uganda</SelectItem>
                        <SelectItem value="rw">Rwanda</SelectItem>
                        <SelectItem value="et">Ethiopia</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="studentCount">Estimated number of students</Label>
                    <Select required>
                      <SelectTrigger id="studentCount">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-100">1 - 100 students</SelectItem>
                        <SelectItem value="101-500">101 - 500 students</SelectItem>
                        <SelectItem value="501-1000">501 - 1,000 students</SelectItem>
                        <SelectItem value="1001-2500">1,001 - 2,500 students</SelectItem>
                        <SelectItem value="2500+">2,500+ students</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="referral">How did you hear about us?</Label>
                    <Select>
                      <SelectTrigger id="referral">
                        <SelectValue placeholder="Select option (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="search">Search Engine</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="referral">Referral from another school</SelectItem>
                        <SelectItem value="conference">Conference/Event</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-start space-x-2 pt-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm font-normal leading-snug">
                      I agree to the{" "}
                      <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
                      {" "}and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                    </Label>
                  </div>
                </>
              )}

              <div className="flex gap-3 pt-2">
                {step === 2 && (
                  <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(1)}>
                    Back
                  </Button>
                )}
                <Button type="submit" className="flex-1" disabled={isLoading || (step === 1 && !accountType)}>
                  {isLoading ? "Creating account..." : step === 1 ? "Continue" : "Create account"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
