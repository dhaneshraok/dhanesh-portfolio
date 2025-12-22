// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to merge Tailwind classes efficiently.
 * It combines 'clsx' (for conditional logic) and 'tailwind-merge' (to resolve conflicts).
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}