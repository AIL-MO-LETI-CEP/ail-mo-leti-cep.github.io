import fs from 'node:fs/promises';
import { join, parse } from 'path';
import matter from 'gray-matter';
import { NextApiHandler } from 'next';
import parseMatter from 'src/util/parseMatter';

const postsDirectory = join(process.cwd(), '_posts');

export async function getAllPosts() {
  const fileNames = await fs.readdir(postsDirectory);

  const files = await Promise.all(
    fileNames.map((name) => fs.readFile(join(postsDirectory, name), 'utf-8'))
  );
  const parsedFileContents = files.map((file) => matter(file));

  return parsedFileContents
    .map((data, index) => ({
      path: parse(fileNames[index]).name,
      ...parseMatter(data),
    }))
    .sort((post1, post2) => {
      return (
        Number(post1.date.replaceAll('/', '')) -
        Number(post2.date.replaceAll('/', ''))
      );
    });
}

export type Post = Awaited<ReturnType<typeof getAllPosts>>[0];
export type PostsResult = Awaited<Post[]>;

const handler: NextApiHandler = async (_req, res) => {
  const contents = await getAllPosts();
  res.json(contents);
};

export default handler;
