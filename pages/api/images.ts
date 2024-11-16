import fs from 'node:fs/promises';
import { join } from 'path';
import { BASE_HREF } from 'src/data/const';

export const getImageFileNames = async (imageDir: string) => {
  const imageDirectory = join(`${BASE_HREF}public/imgs`, imageDir);
  const imageNames = await fs.readdir(imageDirectory);

  return imageNames;
};
