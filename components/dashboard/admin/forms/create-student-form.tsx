"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createStudentFormSchema, CreateStudentFormValues } from "@/modules/validations/student"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import { toast } from "sonner" // Assuming sonner is used for toasts based on package.json

interface CreateStudentFormProps {
  onSuccess?: () => void;
  schoolId: string;
}

export function CreateStudentForm({ onSuccess, schoolId }: CreateStudentFormProps) {
  const queryClient = useQueryClient()
  const [apiError, setApiError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CreateStudentFormValues>({
    resolver: zodResolver(createStudentFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      classId: "",
      gender: "",
      guardianEmail: "",
    },
  })

  // Watch for Select components since they don't use standard ref registration
  const classIdValue = watch("classId");
  const genderValue = watch("gender");

  const mutation = useMutation({
    mutationFn: async (data: CreateStudentFormValues) => {
      // Create a payload that the API understands.
      // The API handles creating the User, then creating the Student.
      const payload = { ...data, schoolId }
      
      const response = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to create student")
      }
      
      return response.json()
    },
    onSuccess: () => {
      toast.success("Student created successfully")
      queryClient.invalidateQueries({ queryKey: ["students", schoolId] })
      queryClient.invalidateQueries({ queryKey: ["dashboard-stats"] }) // invalidate stats too
      if (onSuccess) onSuccess()
    },
    onError: (error: any) => {
      setApiError(error.message)
      toast.error("Failed to create student")
    },
  })

  const onSubmit = (data: CreateStudentFormValues) => {
    setApiError(null)
    mutation.mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {apiError && (
        <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md">
          {apiError}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" placeholder="Enter first name" {...register("firstName")} />
          {errors.firstName && <p className="text-xs text-destructive">{errors.firstName.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" placeholder="Enter last name" {...register("lastName")} />
          {errors.lastName && <p className="text-xs text-destructive">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="student@school.edu" {...register("email")} />
        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="classId">Class</Label>
          <Select value={classIdValue} onValueChange={(val) => setValue("classId", val, { shouldValidate: true })}>
            <SelectTrigger id="classId">
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              {/* Note: In a real app, these should be fetched dynamically from the DB */}
              <SelectItem value="cl_1">SS3 Science</SelectItem>
              <SelectItem value="cl_2">SS3 Arts</SelectItem>
              <SelectItem value="cl_3">SS2 Science</SelectItem>
              <SelectItem value="cl_4">SS2 Commercial</SelectItem>
              <SelectItem value="cl_5">SS1 Science</SelectItem>
              <SelectItem value="cl_6">JSS3</SelectItem>
            </SelectContent>
          </Select>
          {errors.classId && <p className="text-xs text-destructive">{errors.classId.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select value={genderValue} onValueChange={(val) => setValue("gender", val, { shouldValidate: true })}>
            <SelectTrigger id="gender">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MALE">Male</SelectItem>
              <SelectItem value="FEMALE">Female</SelectItem>
              <SelectItem value="OTHER">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && <p className="text-xs text-destructive">{errors.gender.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="guardianEmail">Guardian email (Optional)</Label>
        <Input id="guardianEmail" type="email" placeholder="guardian@email.com" {...register("guardianEmail")} />
        {errors.guardianEmail && <p className="text-xs text-destructive">{errors.guardianEmail.message}</p>}
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t">
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
              Creating...
            </>
          ) : (
            "Add Student"
          )}
        </Button>
      </div>
    </form>
  )
}
