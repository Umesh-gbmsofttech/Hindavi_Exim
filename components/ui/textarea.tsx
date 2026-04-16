import * as React from "react"
import { cn } from "@/lib/utils"

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[130px] w-full rounded-card border border-brand-accent/15 bg-white px-4 py-3 text-sm text-brand-ink outline-none transition placeholder:text-brand-accent/50 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10",
      className
    )}
    {...props}
  />
))

Textarea.displayName = "Textarea"
