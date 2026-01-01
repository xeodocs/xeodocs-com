"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { BlogPost } from "@/lib/blog"
import { ArrowRight, Calendar, User } from "lucide-react"

export function BlogCard({ post }: { post: BlogPost }) {
    return (
        <motion.article
            whileHover={{ y: -5 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/5 bg-white/50 p-6 backdrop-blur-lg transition-all hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
        >
            <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-20">
                <span className="sr-only">Read article</span>
            </Link>

            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {post.featuredImage && (
                <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl">
                    <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            )}

            <div className="relative z-10 flex flex-col grow">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <time dateTime={post.date} className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(post.date), "MMM d, yyyy")}
                    </time>
                    <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                    </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                    {post.description}
                </p>

                <div className="mt-auto pt-4 flex items-center text-sm font-medium text-primary">
                    Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </motion.article>
    )
}
