import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getPostBySlug } from "@/lib/blog"
import { format } from "date-fns"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"

export async function generateMetadata(props: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const params = await props.params;
    const post = getPostBySlug(params.slug)

    if (!post) {
        return {
            title: "Post Not Found",
        }
    }

    const { title, date, author, featuredImage } = post
    const description = post.content.slice(0, 160).replace(/[#*`]/g, "") + "..."

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime: date,
            authors: [author],
            images: featuredImage ? [{ url: featuredImage }] : [],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: featuredImage ? [featuredImage] : [],
        },
    }
}

export default async function BlogPostPage(props: {
    params: Promise<{ slug: string }>
}) {
    const params = await props.params;
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Background gradients */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[128px] mix-blend-screen dark:mix-blend-lighten opacity-40 animate-blob" />
            </div>

            <article className="container mx-auto max-w-3xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Blog
                </Link>

                <header className="mb-12">
                    {post.featuredImage && (
                        <div className="relative w-full h-[400px] max-[825px]:h-[250px] mb-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src={post.featuredImage}
                                alt={post.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map(tag => (
                            <span key={tag} className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                                <Tag className="mr-1.5 h-3 w-3" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-foreground">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-6 text-muted-foreground border-b border-black/5 dark:border-white/5 pb-8">
                        <time dateTime={post.date} className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {format(new Date(post.date), "MMMM d, yyyy")}
                        </time>
                        <span className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            {post.author}
                        </span>
                    </div>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-white/10 prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:rounded-r-lg">
                    <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{post.content}</ReactMarkdown>
                </div>
            </article>
        </div>
    )
}
