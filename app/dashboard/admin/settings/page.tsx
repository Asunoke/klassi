"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Building, Mail, Phone, Globe, Bell, Shield, Users, CreditCard, Upload, Save, AlertTriangle } from "lucide-react"

export default function SettingsPage() {
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSaving(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your school settings and preferences</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          {/* School Profile */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                School Profile
              </CardTitle>
              <CardDescription>Basic information about your school</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="bg-primary/10 text-primary text-2xl">LA</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Logo
                  </Button>
                  <p className="text-xs text-muted-foreground">PNG, JPG up to 2MB</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="schoolName">School Name</Label>
                  <Input id="schoolName" defaultValue="Lagos Academy International" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schoolCode">School Code</Label>
                  <Input id="schoolCode" defaultValue="LAI-2024" disabled />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" defaultValue="admin@lagosacademy.edu" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="phone" type="tel" defaultValue="+234 801 234 5678" className="pl-10" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="website" type="url" defaultValue="https://lagosacademy.edu" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" defaultValue="15 Education Avenue, Victoria Island, Lagos, Nigeria" rows={2} />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select defaultValue="ng">
                    <SelectTrigger id="country">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ng">Nigeria</SelectItem>
                      <SelectItem value="ke">Kenya</SelectItem>
                      <SelectItem value="gh">Ghana</SelectItem>
                      <SelectItem value="za">South Africa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="wat">
                    <SelectTrigger id="timezone">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wat">West Africa Time (WAT)</SelectItem>
                      <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                      <SelectItem value="sast">South Africa Time (SAST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select defaultValue="ngn">
                    <SelectTrigger id="currency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ngn">Nigerian Naira (NGN)</SelectItem>
                      <SelectItem value="kes">Kenyan Shilling (KES)</SelectItem>
                      <SelectItem value="ghs">Ghanaian Cedi (GHS)</SelectItem>
                      <SelectItem value="zar">South African Rand (ZAR)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={saving}>
                <Save className="mr-2 h-4 w-4" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>

          {/* Academic Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Academic Settings</CardTitle>
              <CardDescription>Configure your academic year and grading system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="academicYear">Current Academic Year</Label>
                  <Select defaultValue="2024-2025">
                    <SelectTrigger id="academicYear">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024-2025">2024-2025</SelectItem>
                      <SelectItem value="2023-2024">2023-2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currentTerm">Current Term</Label>
                  <Select defaultValue="term3">
                    <SelectTrigger id="currentTerm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="term1">Term 1</SelectItem>
                      <SelectItem value="term2">Term 2</SelectItem>
                      <SelectItem value="term3">Term 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="gradingSystem">Grading System</Label>
                <Select defaultValue="percentage">
                  <SelectTrigger id="gradingSystem">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percentage">Percentage (0-100%)</SelectItem>
                    <SelectItem value="gpa">GPA (0-4.0)</SelectItem>
                    <SelectItem value="letter">Letter Grades (A-F)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={saving}>
                <Save className="mr-2 h-4 w-4" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Choose how you want to receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  { title: "Email Notifications", description: "Receive updates via email", defaultChecked: true },
                  { title: "SMS Notifications", description: "Receive urgent alerts via SMS", defaultChecked: true },
                  { title: "Attendance Alerts", description: "Notify when students are absent", defaultChecked: true },
                  { title: "Grade Updates", description: "Notify when grades are posted", defaultChecked: true },
                  { title: "Fee Reminders", description: "Send payment reminders to parents", defaultChecked: true },
                  { title: "Event Reminders", description: "Remind about upcoming events", defaultChecked: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Switch defaultChecked={item.defaultChecked} />
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={saving}>
                <Save className="mr-2 h-4 w-4" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Require Password Change</p>
                    <p className="text-sm text-muted-foreground">Force users to change password every 90 days</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Session Timeout</p>
                    <p className="text-sm text-muted-foreground">Auto logout after inactivity</p>
                  </div>
                  <Select defaultValue="30">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={saving}>
                <Save className="mr-2 h-4 w-4" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="h-5 w-5" />
                Danger Zone
              </CardTitle>
              <CardDescription>Irreversible actions for your school account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Export All Data</p>
                  <p className="text-sm text-muted-foreground">Download all school data as CSV</p>
                </div>
                <Button variant="outline">Export</Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Delete School Account</p>
                  <p className="text-sm text-muted-foreground">Permanently delete your school and all data</p>
                </div>
                <Button variant="destructive">Delete</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Team Members
              </CardTitle>
              <CardDescription>Manage administrators and their permissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Dr. Ngozi Adichie", email: "ngozi@school.edu", role: "Super Admin", status: "Active" },
                { name: "Mr. Kwesi Mensah", email: "kwesi@school.edu", role: "Admin", status: "Active" },
                { name: "Mrs. Aisha Mohammed", email: "aisha@school.edu", role: "Admin", status: "Invited" },
              ].map((member, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={member.status === "Active" ? "default" : "secondary"}>
                      {member.status}
                    </Badge>
                    <Badge variant="outline">{member.role}</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button>Invite Team Member</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Subscription Plan
              </CardTitle>
              <CardDescription>Manage your subscription and billing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 border rounded-lg bg-primary/5">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-lg">Professional Plan</p>
                    <Badge>Current</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Up to 2,500 students</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">$99<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                  <p className="text-sm text-muted-foreground">Next billing: Jan 1, 2025</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Students Used</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[50%] bg-primary rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">1,247 / 2,500</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Storage Used</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[30%] bg-secondary rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">3 GB / 10 GB</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button>Upgrade Plan</Button>
              <Button variant="outline">View Invoices</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
