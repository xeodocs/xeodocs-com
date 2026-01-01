"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PaginationProps {
    currentPage: number
    totalPages: number
    baseUrl: string
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
    return (
        <div className="flex items-center justify-center gap-2 mt-12">
            <Link
                href={`${baseUrl}?page=${currentPage - 1}`}
                className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm transition-all hover:bg-primary/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10",
                    currentPage <= 1 && "pointer-events-none opacity-50"
                )}
            >
                <ChevronLeft className="h-5 w-5" />
            </Link>

            <span className="text-sm text-muted-foreground mx-4">
                Page {currentPage} of {totalPages}
            </span>

            <Link
                href={`${baseUrl}?page=${currentPage + 1}`}
                className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm transition-all hover:bg-primary/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10",
                    currentPage >= totalPages && "pointer-events-none opacity-50"
                )}
            >
                <ChevronRight className="h-5 w-5" />
            </Link>
        </div>
    )
}
