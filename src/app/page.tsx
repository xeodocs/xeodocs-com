import type { Metadata } from "next"
import { ProjectList } from "@/components/project-list"
import { LatestArticles } from "@/components/latest-articles"
import { getAllPosts } from "@/lib/blog"
import { Hero } from "@/components/hero"

export const metadata: Metadata = {
  title: "XeoDocs - AI-Powered Translations for Open Source",
  description: "An Open Source Documentation translation project using Artificial Intelligence to keep translations always up-to-date and available in multiple languages.",
}

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[128px] mix-blend-screen dark:mix-blend-lighten opacity-50 animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[128px] mix-blend-screen dark:mix-blend-lighten opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[128px] mix-blend-screen dark:mix-blend-lighten opacity-40 animate-blob animation-delay-4000" />
      </div>

      <main className="grow pt-32 pb-20 px-6">
        <Hero />

        <section id="active-projects" className="container mx-auto scroll-mt-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Active Projects</h2>
            <div className="h-px bg-linear-to-r from-transparent via-black/10 to-transparent grow ml-8 dark:via-white/10" />
          </div>

          <ProjectList />
        </section>

        <LatestArticles posts={latestPosts} />
      </main>
    </div>
  )
}
