import Link from "next/link"
import { getPaginatedPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog-card"
import { Pagination } from "@/components/pagination"
import { ArrowLeft } from "lucide-react"

export default async function BlogPage(props: {
    searchParams: Promise<{ page?: string }>
}) {
    const searchParams = await props.searchParams;
    const currentPage = Number(searchParams.page) || 1
    const postsPerPage = 6
    const { posts, totalPages } = getPaginatedPosts(currentPage, postsPerPage)

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Background gradients similar to home */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[128px] mix-blend-screen dark:mix-blend-lighten opacity-50 animate-blob" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[128px] mix-blend-screen dark:mix-blend-lighten opacity-30 animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto">
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70 pb-2">
                        Blog & Insights
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Latest thoughts on system design, documentation, and web development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>

                {totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        baseUrl="/blog"
                    />
                )}
            </div>
        </div>
    )
}
