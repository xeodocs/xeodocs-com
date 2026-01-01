"use client"

import { useEffect, useState } from "react"
import { Project, ProjectCard } from "./project-card"
import { motion } from "framer-motion"

export function ProjectList() {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setLoading(false)
            })
            .catch(err => {
                console.error('Failed to fetch projects', err)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-64 rounded-2xl bg-white/5 animate-pulse" />
                ))}
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <ProjectCard project={project} />
                </motion.div>
            ))}
        </div>
    )
}
