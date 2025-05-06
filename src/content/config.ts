import { defineCollection, z } from 'astro:content';

// 記事コレクションのスキーマを定義
const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.string().transform(str => new Date(str)),
    summary: z.string(),
    tags: z.array(z.string()),
  }),
});

// コレクションをエクスポート
export const collections = {
  'articles': articlesCollection,
};