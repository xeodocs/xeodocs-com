import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    content: string;
    tags: string[];
    featuredImage?: string;
}

export function getAllPosts(): BlogPost[] {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(contentDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(contentDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                slug,
                content,
                title: data.title || '',
                description: data.description || '',
                date: data.date ? new Date(data.date).toISOString() : '',
                author: data.author || 'XeoDocs Team',
                tags: data.tags || [],
                featuredImage: data.featuredImage || '/images/blog/xeodocs-featured.webp',
            };
        });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPostBySlug(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(contentDirectory, `${slug}.md`);
        if (!fs.existsSync(fullPath)) {
            return null;
        }
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            content,
            title: data.title || '',
            description: data.description || '',
            date: data.date ? new Date(data.date).toISOString() : '',
            author: data.author || 'XeoDocs Team',
            tags: data.tags || [],
            featuredImage: data.featuredImage || '/images/blog/xeodocs-featured.webp',
        };
    } catch (error) {
        return null;
    }
}

export function getPaginatedPosts(page: number, limit: number): { posts: BlogPost[], totalPages: number } {
    const allPosts = getAllPosts();
    const totalPosts = allPosts.length;
    const totalPages = Math.ceil(totalPosts / limit);

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const posts = allPosts.slice(startIndex, endIndex);

    return {
        posts,
        totalPages
    };
}
