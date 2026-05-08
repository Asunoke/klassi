"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, Download, Receipt, Clock, CheckCircle2, AlertCircle, Wallet } from "lucide-react"

const feeStructure = [
  { item: "Tuition Fee", amount: 150000, status: "paid", dueDate: "Sep 1, 2024", paidDate: "Aug 28, 2024" },
  { item: "Laboratory Fee", amount: 25000, status: "paid", dueDate: "Sep 1, 2024", paidDate: "Aug 28, 2024" },
  { item: "Library Fee", amount: 10000, status: "paid", dueDate: "Sep 1, 2024", paidDate: "Aug 28, 2024" },
  { item: "Sports Fee", amount: 15000, status: "pending", dueDate: "Dec 15, 2024", paidDate: null },
  { item: "Technology Fee", amount: 20000, status: "pending", dueDate: "Dec 15, 2024", paidDate: null },
  { item: "Examination Fee", amount: 30000, status: "upcoming", dueDate: "Mar 1, 2025", paidDate: null },
]

const paymentHistory = [
  { id: "PAY001", date: "Aug 28, 2024", amount: 185000, method: "Bank Transfer", status: "completed", receipt: true },
  { id: "PAY002", date: "May 15, 2024", amount: 200000, method: "Card Payment", status: "completed", receipt: true },
  { id: "PAY003", date: "Jan 10, 2024", amount: 185000, method: "Bank Transfer", status: "completed", receipt: true },
  { id: "PAY004", date: "Sep 5, 2023", amount: 175000, method: "Card Payment", status: "completed", receipt: true },
]

const children = [
  { id: 1, name: "Adaeze Okonkwo", class: "SS3 Science A", balance: 35000 },
  { id: 2, name: "Chidi Okonkwo", class: "JSS2 A", balance: 25000 },
]

export default function FeesPage() {
  const totalPaid = feeStructure.filter(f => f.status === "paid").reduce((acc, f) => acc + f.amount, 0)
  const totalPending = feeStructure.filter(f => f.status === "pending").reduce((acc, f) => acc + f.amount, 0)
  const totalUpcoming = feeStructure.filter(f => f.status === "upcoming").reduce((acc, f) => acc + f.amount, 0)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fees & Payments</h1>
          <p className="text-muted-foreground">Manage school fees and payment history</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="adaeze">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select child" />
            </SelectTrigger>
            <SelectContent>
              {children.map(child => (
                <SelectItem key={child.id} value={child.name.split(" ")[0].toLowerCase()}>
                  {child.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <CheckCircle2 className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Paid</p>
              <p className="text-2xl font-bold">N{totalPaid.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending</p>
              <p className="text-2xl font-bold">N{totalPending.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <Wallet className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Upcoming</p>
              <p className="text-2xl font-bold">N{totalUpcoming.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-accent/30 bg-accent/5">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <AlertCircle className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Due Now</p>
              <p className="text-2xl font-bold">N{totalPending.toLocaleString()}</p>
              <p className="text-xs text-accent">Due Dec 15</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Pay Button */}
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-semibold">Outstanding Balance: N{totalPending.toLocaleString()}</h3>
            <p className="text-sm text-muted-foreground">Sports Fee and Technology Fee due by December 15, 2024</p>
          </div>
          <Button size="lg">
            <CreditCard className="mr-2 h-4 w-4" />
            Pay Now
          </Button>
        </CardContent>
      </Card>

      <Tabs defaultValue="breakdown" className="space-y-4">
        <TabsList>
          <TabsTrigger value="breakdown">Fee Breakdown</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
        </TabsList>

        <TabsContent value="breakdown">
          <Card>
            <CardHeader>
              <CardTitle>Fee Structure - Term 3, 2024</CardTitle>
              <CardDescription>Detailed breakdown of all fees for this term</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Paid Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {feeStructure.map((fee, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{fee.item}</TableCell>
                      <TableCell>N{fee.amount.toLocaleString()}</TableCell>
                      <TableCell>{fee.dueDate}</TableCell>
                      <TableCell>{fee.paidDate || "—"}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            fee.status === "paid" ? "default" : 
                            fee.status === "pending" ? "destructive" : "secondary"
                          }
                        >
                          {fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {fee.status === "paid" ? (
                          <Button variant="ghost" size="sm">
                            <Receipt className="h-4 w-4" />
                          </Button>
                        ) : fee.status === "pending" ? (
                          <Button size="sm">Pay</Button>
                        ) : (
                          <span className="text-sm text-muted-foreground">—</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="flex items-center justify-between mt-6 pt-4 border-t">
                <div className="text-lg font-semibold">
                  Total: N{feeStructure.reduce((acc, f) => acc + f.amount, 0).toLocaleString()}
                </div>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Statement
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>All payments made for this student</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Receipt</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentHistory.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-mono text-sm">{payment.id}</TableCell>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell className="font-medium">N{payment.amount.toLocaleString()}</TableCell>
                      <TableCell>{payment.method}</TableCell>
                      <TableCell>
                        <Badge variant="default">
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          Completed
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
