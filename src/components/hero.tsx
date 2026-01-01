import Link from "next/link";

export function Hero() {
    return (
        <section className="container mx-auto text-center mb-24 max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-8 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Open Source Documentation
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-linear-to-b from-foreground via-foreground to-foreground/50">
                AI-Powered Translations for <br />
                <span className="text-primary">Open Source</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                An Open Source Documentation translation project using Artificial Intelligence to keep translations always up-to-date and available in multiple languages.
            </p>

            <div className="flex items-center justify-center gap-4">
                <Link
                    href="#active-projects"
                    className="rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
                >
                    <span className="hidden min-[420px]:inline">Explore Translations</span>
                    <span className="inline min-[420px]:hidden">Translations</span>
                </Link>
                <Link
                    href="/blog"
                    className="rounded-full border border-black/5 bg-black/5 px-8 py-3 font-medium hover:bg-black/10 transition-all hover:scale-105 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 cursor-pointer"
                >
                    <span className="hidden min-[420px]:inline">Read Blog</span>
                    <span className="inline min-[420px]:hidden">Blog</span>
                </Link>
            </div>
        </section>
    )
}
