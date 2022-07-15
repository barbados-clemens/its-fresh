/// <reference lib="dom" />
import type {
  BlogContext,
  BlogMiddleware,
} from "https://deno.land/x/blog@0.4.1/types.d.ts";

export interface CanonicalUrlsOptions {
  baseUrl?: string;
  routesToIgnore?: string[];
}

export function canonicalUrls(
  { baseUrl, routesToIgnore }: CanonicalUrlsOptions
): BlogMiddleware {
  return async function (req: Request, ctx: BlogContext): Promise<Response> {
    const url = new URL(req.url);
    if (routesToIgnore?.includes(url.pathname)) {
      return ctx.next();
    }
    ctx.state = {
      ...ctx.state,
      canonicalUrl: baseUrl ? baseUrl + url.pathname : req.url
    };

    return await ctx.next();
  };
}
