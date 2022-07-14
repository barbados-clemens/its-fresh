---
title: Moving My Personal Blog to Deno
description: It's about time I explore the world of Deno and see what it's like. Maybe the grass is greener? 🤔.
author: Caleb Ukle
publish_date: 2022-06-13
og:image: https://media.calebukle.com/uploads/colorful-deno-logo-by-hashrock.png
tags:
  - Deno
  - Scully
  - Remix
---
Until this blog post, my personal site head built with [Scully](https://scully.io), and for the most part I liked it. 
Since I'm an Angular dev it was a natural fit. I was an early adopter of it. In fact so early that my site was running on an alpha version of Scully. 

It was getting to the point where it needed to be overhauled again and I thought. Why not Remix? While a fun endeavor, that's still quite a bit of work. That's when at RemixConf 2022 I saw Ryan demo off the Deno Blog package. 
It is so simple. Dump markdown files in a directory and config a couple options and you're done. This is was I needed. Remove all the barriers so I can get back to writing. It's been 2 years since I last wrote! 

That brings me to this blog post now. Me talking about rewrting my blog again, but this time with a focus on simplicity ✨. 

## Deno First Impressions
I initially tried using the [fresh framework]() directly, but quickly realized this requires the same level of effort as any other platform so I reached for the [blog package]() that is so stinking simple I love it. 

I did run into an issue where it was unable to parse a specific markdown file due to a white space issue which was quite hard to track down. Debugging Deno code is quite hard. I can't dive into node_modules and console.log my way through stuff. 
Trying to dive into the Deno cached packages was no luck. Same with attaching the vscode debugger. Just never stopped on a breakpoint. Eventually I found the rouge whitespace and find it a bit odd this caused the error. 

```diff
- --- 
+ ---
```

Not a smashing success for Deno at first attempt but once those issues were sorted I went to try deploying. 

# Deno Deploy 
Oh wow. I love Deno Deploy 🥰. Such a good service. Just like the first 5
Time you use [Netlify]() feels magical. Link your repo and boom site running. Even custom Domain was so quick and seemless. Took under 2 minutes to get up and running with SSL. 



