import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { BLOG_POSTS } from "../../copy"

export function BlogSection() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24" id="blog">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:mb-14">
          <span className="inline-flex w-fit rounded-full border border-border bg-background px-3 py-1 text-sm font-medium shadow-sm">
            Blog
          </span>
          <h2 className="max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
            Practical reads to help you move <span className="italic text-muted-foreground">faster.</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BLOG_POSTS.map((post) => (
            <Card
              key={post.title}
              className="overflow-hidden rounded-3xl border-border/80 shadow-md transition-shadow hover:shadow-lg"
            >
              <div
                className={`relative aspect-[4/3] bg-gradient-to-br ${post.coverClass} ring-1 ring-border/40`}
              />
              <CardHeader className="gap-2">
                <Badge variant="secondary" className="w-fit">
                  {post.category}
                </Badge>
                <CardTitle className="text-base font-medium leading-snug">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3 text-xs leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2 pt-0 text-xs text-muted-foreground">
                {post.meta ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="size-1.5 rounded-full bg-foreground" aria-hidden />
                    <span>{post.meta}</span>
                  </div>
                ) : null}
                {post.byline ? (
                  <p className="italic text-muted-foreground">{post.byline}</p>
                ) : null}
                <Link
                  href="#"
                  className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Read article
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
