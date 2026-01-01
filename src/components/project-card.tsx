"use client"

import { motion } from "framer-motion"
import { ExternalLink, Globe } from "lucide-react"

export interface Project {
    id: string
    title: string
    domain: string
    description: string
}

export function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white/50 p-6 backdrop-blur-lg transition-all hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
        >
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 grow leading-relaxed">
                    {project.description}
                </p>

                <a
                    href={`https://${project.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                    <span className="border-b border-primary/30 pb-0.5 group-hover:border-primary transition-colors">
                        {project.domain}
                    </span>
                    <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </motion.div>
    )
}
