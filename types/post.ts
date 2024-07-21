import type { ParsedContent } from "@nuxt/content"

export interface PostBase extends ParsedContent {
  date: number
  description: string
}

export interface Blog extends PostBase {
  category: string
  author: string[]
}
