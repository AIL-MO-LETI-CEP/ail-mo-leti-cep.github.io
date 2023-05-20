import React from "react";
import { GetStaticProps } from "next";
import { getImageFileNames } from "./api/images";
import { Slideshow } from "src/pages/index/slideshow";

type Props = {
  readonly imageFileNames: string[];
};

const SlideshowPage = ({ imageFileNames }: Props) => {
  return <Slideshow imageFileNames={imageFileNames} interval={5000} />;
};

export default SlideshowPage;

export const getStaticProps: GetStaticProps = async () => {
  const imageFileNames = await getImageFileNames("slideshow");
  return {
    props: {
      imageFileNames: imageFileNames,
    },
  };
};
