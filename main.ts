import blog, { redirects } from "https://deno.land/x/blog@0.4.1/blog.tsx";
import { BlogState } from "https://deno.land/x/blog@0.4.1/types.d.ts";
import { Footer } from "./components/Footer.tsx";
import { Header } from "./components/Header.tsx";
import { IconDiscogs } from "./components/IconDiscogs.tsx";
import { canonicalUrls } from "./middleware/canonicalUrls.ts";
import { getImages } from "./utils/discogs.ts";

if (!Deno.env.get("DISCOGS_TOKEN")) {
  throw new Error("DISCOGS_TOKEN environment variable is not set");
}
const blogState = {
  title: "Caleb Ukle",
  description:
    "This is where I write about random things that are interesting to me. Enjoy!",
  avatar:
    "https://media.calebukle.com/cdn-cgi/imagedelivery/6_sVAC4MwGJ_cI4QnB3iTg/avi/public",
  avatarClass: "rounded-full",
  author: "Caleb Ukle",
  lang: "en",
  dateStyle: "long",
  links: [
    { title: "Twitter", url: "https://twitter.com/cu_galaxy" },
    { title: "GitHub", url: "https://github.com/barbados-clemens" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/caleb-ukle/" },
    {
      title: "Discogs",
      url: "https://www.discogs.com/user/Barbados_Clemens/collection",
      icon: IconDiscogs(),
    },
  ],
  theme: "auto",
} as BlogState;

const recordImages = await getImages();

blog({
  ...blogState,
  header: Header({
    state: blogState,
    recordImages,
  }),
  footer: Footer({ author: "Caleb Ukle" }),
  middlewares: [
    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    canonicalUrls({ baseUrl: "https://calebukle.com" }),
    redirects({
      "/blog": "/?tag=Blog",
      "/lego": "/?tag=Lego",
      "/use": "/uses",
    }),
  ],
});
