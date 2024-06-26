import blog, { ga, redirects } from "https://deno.land/x/blog@0.7.0/blog.tsx";
import { UNOCSS_OPTS } from "./unocss.ts";

blog({
  title: "readdir.dev",
  author: "Rajika Imal",
  avatar: "./profile_pic.png",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:inbox.rajika@gmail.com" },
    { title: "GitHub", url: "https://github.com/rajikaimal" },
    { title: "Twitter", url: "https://twitter.com/rajikaimal" },
  ],
  lang: "en",
  dateFormat: (date) =>
    new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date),
  middlewares: [
    redirects({
      "system_design_basics.html": "/system_design_basics",
      "functional_programming_concepts.html":
        "/functional_programming_concepts",
      "esbuild.html": "/esbuild",
    }),
  ],
  unocss: UNOCSS_OPTS,
});
