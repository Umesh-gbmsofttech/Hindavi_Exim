import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path = "") {
  const base = "https://hindavi.in"
  return path ? `${base}${path}` : base
}
