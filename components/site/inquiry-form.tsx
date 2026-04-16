"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type FormValues = {
  name: string
  company: string
  email: string
  country: string
  product: string
  message: string
}

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>()

  const onSubmit = async (values: FormValues) => {
    setLoading(true)
    try {
      await new Promise((resolve) => {
        window.setTimeout(resolve, 600)
      })
      console.info("Inquiry submitted", values)
      setSubmitted(true)
      reset()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-section border border-brand-accent/10 bg-white p-6 shadow-soft md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-brand-ink">Full name</label>
            <Input placeholder="Your name" {...register("name", { required: "Name is required" })} />
            {errors.name ? <p className="text-sm text-red-600">{errors.name.message}</p> : null}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-brand-ink">Company</label>
            <Input placeholder="Company name" {...register("company", { required: "Company is required" })} />
            {errors.company ? <p className="text-sm text-red-600">{errors.company.message}</p> : null}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-brand-ink">Email</label>
            <Input
              type="email"
              placeholder="buyer@company.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email ? <p className="text-sm text-red-600">{errors.email.message}</p> : null}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-brand-ink">Country</label>
            <Input placeholder="Destination market" {...register("country", { required: "Country is required" })} />
            {errors.country ? <p className="text-sm text-red-600">{errors.country.message}</p> : null}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-brand-ink">Product required</label>
          <Input placeholder="Turmeric, tamarind, or both" {...register("product", { required: "Product is required" })} />
          {errors.product ? <p className="text-sm text-red-600">{errors.product.message}</p> : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-brand-ink">Inquiry details</label>
          <Textarea
            placeholder="Tell us the grade, packaging, quantity, or destination market you need."
            {...register("message", { required: "Message is required" })}
          />
          {errors.message ? <p className="text-sm text-red-600">{errors.message.message}</p> : null}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-brand-accent/70">
            We typically respond with export and packaging guidance after reviewing your inquiry.
          </p>
          <Button type="submit" variant="secondary" disabled={loading}>
            {loading ? "Submitting..." : "Send Inquiry"}
          </Button>
        </div>
      </form>

      {submitted ? (
        <div className="mt-5 rounded-card bg-brand-surface px-4 py-3 text-sm text-brand-primary">
          Thank you. Your inquiry has been received successfully.
        </div>
      ) : null}
    </div>
  )
}
