type HtmlSnippetProps = {
  html: string
  className?: string
  as?: "span" | "div" | "p"
}

export function HtmlSnippet({ html, className, as: Tag = "span" }: HtmlSnippetProps) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
