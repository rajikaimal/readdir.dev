import { Handlers } from "$fresh/server.ts";
import { getPost, Post } from "../../utils/posts.ts";
import { Head } from "$fresh/runtime.ts";
import { CSS, render } from "https://deno.land/x/gfm/mod.ts";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <h1 class="text-3xl font-bold">{post.title}</h1>
      <time class="text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <div
        class="mt-8 pb-8 markdown-body"
        dangerouslySetInnerHTML={{ __html: render(post.content) }}
      />
    </main>
  );
}
