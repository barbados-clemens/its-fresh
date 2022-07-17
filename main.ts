import blog, { redirects } from "https://deno.land/x/blog@0.4.1/blog.tsx";
import { canonicalUrls } from "./middleware/canonicalUrls.ts";

blog({
  title: "Caleb Ukle",
  description: "This is where I write about random stuff. Enjoy.",
  avatar: "https://media.calebukle.com/uploads/avi.jpg",
  avatarClass: "rounded-full",
  author: "Caleb Ukle",
  lang: "en",
  dateStyle: "long",
  links: [
    { title: "Twitter", url: "https://twitter.com/cu_galaxy" },
    { title: "GitHub", url: "https://github.com/barbados-clemens" },
  ],
  theme: "auto",
  middlewares: [
    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    canonicalUrls({ baseUrl: "https://calebukle.com" }),
    redirects({
      "/hello_world.html": "/hello_world",
      "/blog": "/?tag=Blog",
      "/lego": "/?tag=Lego",
      "/use": "/uses",
    }),
  ],
});
