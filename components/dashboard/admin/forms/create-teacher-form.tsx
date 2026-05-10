"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTeacherFormSchema, CreateTeacherFormValues } from "@/modules/validations/teacher"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

interface CreateTeacherFormProps {
  onSuccess?: () => void;
  schoolId: string;
}

export function CreateTeacherForm({ onSuccess, schoolId }: CreateTeacherFormProps) {
  const queryClient = useQueryClient()
  const [apiError, setApiError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CreateTeacherFormValues>({
    resolver: zodResolver(createTeacherFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
    },
  })

  const departmentValue = watch("department");

  const mutation = useMutation({
    mutationFn: async (data: CreateTeacherFormValues) => {
      const payload = { ...data, schoolId }
      
      const response = await fetch("/api/teachers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to add teacher")
      }
      
      return response.json()
    },
    onSuccess: () => {
      toast.success("Teacher added successfully")
      queryClient.invalidateQueries({ queryKey: ["teachers", schoolId] })
      queryClient.invalidateQueries({ queryKey: ["dashboard-stats"] })
      if (onSuccess) onSuccess()
    },
    onError: (error: any) => {
      setApiError(error.message)
      toast.error("Failed to add teacher")
    },
  })

  const onSubmit = (data: CreateTeacherFormValues) => {
    setApiError(null)
    mutation.mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
      {apiError && (
        <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md">
          {apiError}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="teacherFirst">First name</Label>
          <Input id="teacherFirst" placeholder="Enter first name" {...register("firstName")} />
          {errors.firstName && <p className="text-xs text-destructive">{errors.firstName.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="teacherLast">Last name</Label>
          <Input id="teacherLast" placeholder="Enter last name" {...register("lastName")} />
          {errors.lastName && <p className="text-xs text-destructive">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="teacherEmail">Email</Label>
        <Input id="teacherEmail" type="email" placeholder="teacher@school.edu" {...register("email")} />
        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="teacherPhone">Phone</Label>
        <Input id="teacherPhone" type="tel" placeholder="+234 800 000 0000" {...register("phone")} />
        {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="teacherDept">Department</Label>
        <Select value={departmentValue} onValueChange={(val) => setValue("department", val, { shouldValidate: true })}>
          <SelectTrigger id="teacherDept">
            <SelectValue placeholder="Select department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sciences">Sciences</SelectItem>
            <SelectItem value="languages">Languages</SelectItem>
            <SelectItem value="humanities">Humanities</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
            <SelectItem value="arts">Arts</SelectItem>
          </SelectContent>
        </Select>
        {errors.department && <p className="text-xs text-destructive">{errors.department.message}</p>}
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t mt-6">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onSuccess}
          disabled={isSubmitting || mutation.isPending}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting || mutation.isPending}>
          {isSubmitting || mutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Invitation"
          )}
        </Button>
      </div>
    </form>
  )
}
