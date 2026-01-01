"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { BlogPost } from "@/lib/blog"
import { BlogCard } from "@/components/blog-card"

export function LatestArticles({ posts }: { posts: BlogPost[] }) {
    return (
        <section className="container mx-auto mt-24 mb-12">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Latest from the Blog</h2>
                <Link
                    href="/blog"
                    className="group flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                    View all articles
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                    <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <BlogCard post={post} />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
