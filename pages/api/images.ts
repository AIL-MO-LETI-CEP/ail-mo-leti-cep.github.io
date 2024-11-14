import fs from 'node:fs/promises';
import { join } from 'path';

export const getImageFileNames = async (imageDir: string) => {
  const imageDirectory = join(process.cwd(), 'public/imgs', imageDir);
  const imageNames = await fs.readdir(imageDirectory);

  return imageNames;
};
