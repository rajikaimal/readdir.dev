import { join } from "$std/path/join.ts";
import frontMatter from "https://esm.sh/front-matter@4.0.2";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
}

export async function getPost(slug: string): Promise<Post | null> {
  const text = await Deno.readTextFile(join("./posts", `${slug}.md`));
  const content = frontMatter<Post>(text);

  return {
    slug,
    title: content.attributes.title,
    publishedAt: new Date(content.attributes.publishedAt),
    content: content.body,
    snippet: "", // empty for now :P
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
