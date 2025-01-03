import React from 'react';
import { GetStaticProps } from 'next';
import { Slideshow } from 'src/pages/index/slideshow';
import { getImageFileNames } from './api/images';

type Props = {
  readonly imageFileNames: string[];
};

const SlideshowPage = ({ imageFileNames }: Props) => {
  return <Slideshow imageFileNames={imageFileNames} interval={5000} />;
};

export default SlideshowPage;

export const getStaticProps: GetStaticProps = async () => {
  const imageFileNames = await getImageFileNames('slideshow');
  return {
    props: {
      imageFileNames: imageFileNames,
    },
  };
};
