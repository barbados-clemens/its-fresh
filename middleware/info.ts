import type {
    BlogContext,
    BlogMiddleware,
    BlogSettings,
    BlogState,
    Post,
  } from "https://deno.land/x/blog@0.4.1/types.d.ts";
export function info(...blah: any): BlogMiddleware {
  return async function (req: Request, ctx: BlogContext): Promise<Response> {
    console.log(req, ctx);

    return await ctx.next();
  }
}