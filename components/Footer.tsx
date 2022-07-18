/** @jsx h */
import { h } from "https://deno.land/x/blog@0.4.1/blog.tsx";
import type { VNode } from "https://esm.sh/v87/preact@10.8.2/src/index.d.ts";

// TODO(caleb): how can I get the current page since this is SSR?
export function Footer(props: { author?: string }): VNode {
  return (
    <footer className="mt-20 pb-16 lt-sm:pb-8 lt-sm:mt-16">
      <p className="flex items-center gap-2.5 text-gray-400/800 dark:text-gray-500/800 text-sm">
        <span>
          &copy; {new Date().getFullYear()} {props.author} &middot; Powered by
          {" "}
          <a
            className="inline-flex items-center gap-1 underline hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            href="https://deno.land/x/blog"
          >
            Deno Blog
          </a>
        </span>
        &middot;
        <a
          href="/feed"
          className="inline-flex items-center gap-1 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          title="Atom Feed"
        >
          <IconRssFeed /> RSS
        </a>
        &middot;{" "}
        <a
          href="https://github.com/barbados-clemens/calebukle-com"
          className="inline-flex items-center gap-1 underline hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        >
          Edit this page
        </a>
      </p>
    </footer>
  );
}

function IconRssFeed() {
  return (
    <svg
      class="inline-block w-4 h-4"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
      <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z" />
    </svg>
  );
}
