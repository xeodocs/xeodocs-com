export function SiteFooter() {
    return (
        <footer className="border-t border-primary/5 bg-primary/[0.03] backdrop-blur-sm py-12 dark:border-white/5 dark:bg-black/20">
            <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
                <p>© {new Date().getFullYear()} XeoDocs. All rights reserved.</p>
            </div>
        </footer>
    )
}
