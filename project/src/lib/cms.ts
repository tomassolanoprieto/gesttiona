import matter from 'gray-matter';
import { marked } from 'marked';
import type { BlogPost } from '../types/blog';
import type { Property } from '../types/property';

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await Promise.all(
      Object.entries(import.meta.glob('../content/blog/*.md', { eager: true }))
        .map(([path, content]) => {
          const { data, content: markdown } = matter(content as string);
          return {
            ...data,
            content: marked(markdown),
            slug: path.split('/').pop()?.replace('.md', '') || '',
          } as BlogPost;
        })
    );
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export async function getProperties(): Promise<Property[]> {
  try {
    const properties = await Promise.all(
      Object.entries(import.meta.glob('../content/properties/*.md', { eager: true }))
        .map(([path, content]) => {
          const { data } = matter(content as string);
          return {
            ...data,
            slug: path.split('/').pop()?.replace('.md', '') || '',
          } as Property;
        })
    );
    return properties;
  } catch (error) {
    console.error('Error loading properties:', error);
    return [];
  }
}