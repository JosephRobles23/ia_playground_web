/**
 * LexicalContent — renders Payload's Lexical rich text JSON output.
 *
 * Uses @payloadcms/richtext-lexical/react's RichText component which handles
 * all standard Lexical node types: paragraphs, bold, italic, links, etc.
 * This is a Server Component — no 'use client' needed.
 */
import { RichText } from '@payloadcms/richtext-lexical/react'

type LexicalContentProps = {
  content: Parameters<typeof RichText>[0]['data']
  className?: string
}

export function LexicalContent({ content, className }: LexicalContentProps) {
  if (!content) return null
  return <RichText data={content} className={className} />
}
