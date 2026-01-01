"use client"

import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProjectList } from "@/components/project-list"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[128px] mix-blend-screen dark:mix-blend-lighten opacity-50 animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[128px] mix-blend-screen dark:mix-blend-lighten opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[128px] mix-blend-screen dark:mix-blend-lighten opacity-40 animate-blob animation-delay-4000" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-background/50 backdrop-blur-md dark:border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
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
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="grow pt-32 pb-20 px-6">
        <section className="container mx-auto text-center mb-24 max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            System Design & Documentation
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-linear-to-b from-foreground via-foreground to-foreground/50">
            Build the Future of <br />
            <span className="text-primary">Documentation</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            A domain-driven documentation system designed for the modern web.
            Beautiful, fast, and built for scale.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button className="rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
              Get Started
            </button>
            <button className="rounded-full border border-black/5 bg-black/5 px-8 py-3 font-medium hover:bg-black/10 transition-all hover:scale-105 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
              Documentation
            </button>
          </div>
        </section>

        <section className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Active Projects</h2>
            <div className="h-px bg-linear-to-r from-transparent via-black/10 to-transparent grow ml-8 dark:via-white/10" />
          </div>

          <ProjectList />
        </section>
      </main>

      <footer className="border-t border-primary/5 bg-primary/[0.03] backdrop-blur-sm py-12 dark:border-white/5 dark:bg-black/20">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} XeoDocs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
