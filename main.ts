import blog, { ga, redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "theruntime.dev",
  author: "Rajika Imal",
  avatar: "./profile_pic.jpeg",
  avatarClass: "full",
  background: "#f9f9f9",

  middlewares: [
    redirects({
      "system_design_basics.html": "/system_design_basics",
      "functional_programming_concepts.html":
        "/functional_programming_concepts",
      "esbuild.html": "/esbuild",
    }),
  ],
});
