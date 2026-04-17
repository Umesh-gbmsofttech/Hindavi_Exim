"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-card text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-soft",
        secondary:
          "bg-brand-secondary text-white hover:bg-brand-secondary/90 shadow-soft",
        outline:
          "border border-brand-primary/20 bg-white text-brand-primary hover:border-brand-primary hover:bg-brand-primary/5",
        ghost: "text-brand-primary hover:bg-brand-primary/5"
      },
      size: {
        default: "h-11 px-5 py-2.5",
        lg: "h-12 px-6 text-base",
        sm: "h-10 px-4"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? "span" : "button"
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
}

export { buttonVariants }
