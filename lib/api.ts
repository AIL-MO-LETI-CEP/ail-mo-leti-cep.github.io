import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

type GetPostSlugs = () => string[];
export const getPostSlugs: GetPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

type Items = {
  [key: string]: string;
};
type GetPostBySlug = (slug: string, fields: string[]) => Items;
export const getPostBySlug: GetPostBySlug = (slug, fields = []) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
};

type GetAllPosts = (field: string[]) => Items[];
export const getAllPosts: GetAllPosts = (fields = []) => {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));
  return posts;
};
