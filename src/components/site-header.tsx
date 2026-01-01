"use client"

import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-background/50 backdrop-blur-md dark:border-white/5">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/xeodocs-logo.png"
                            alt="XeoDocs Logo"
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                        />
                        <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
                            XeoDocs
                        </span>
                    </Link>
                </div>
                <ThemeToggle />
            </div>
        </header>
    )
}
