import FrontMatter from "@burmajs/frontmatter";
import { join } from "$std/path/join.ts";

export interface Post {
    slug: string;
    title: string;
    publishedAt: Date;
    content: string;
    snippet: string;
}

export async function getPost(slug: string): Promise<Post | null> {
    const text = await Deno.readTextFile(join("./posts", `${slug}.md`));
    const { json } = new FrontMatter<Post>(text);
    return {
        slug,
        title: json.data.title,
        publishedAt: new Date(json.data.publishedAt),
        content: json.content,
        snippet: json.snippet,
    };
}

export async function getPosts(): Promise<Post[]> {
    const files = Deno.readDir("./posts");
    const promises = [];
    for await (const file of files) {
        const slug = file.name.replace(".md", "");
        promises.push(getPost(slug));
    }
    const posts = (await Promise.all(promises)) as Post[];
    posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
    return posts;
}
