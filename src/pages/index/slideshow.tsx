import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import style from 'styles/slideshow.module.css';

type Props = {
  readonly imageFileNames: string[];
  readonly interval: number;
};

const initChildren = [
  <Image
    key={0}
    src="/imgs/slideshow/冠.png"
    fill
    alt=""
    className={style.fadeout}
  />,
  <Image
    key={1}
    src="/imgs/slideshow/国.png"
    fill
    alt=""
    className={style.fadein}
  />,
];

const Slides = ({ imageFileNames, interval }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexIncrement = () => {
    setCurrentIndex((currentIndex + 1) % imageFileNames.length);
  };
  const [nextIndex, setNextIndex] = useState(1);
  const nextIndexIncrement = () => {
    setNextIndex((nextIndex + 1) % imageFileNames.length);
  };
  const [children, setChildren] = useState(initChildren);

  useEffect(() => {
    const intervalId = setInterval(transit, interval);
    return () => {
      clearInterval(intervalId);
    };
  });
  const transit = () => {
    const slides = imageFileNames.map((name, index) => {
      let className = '';
      if (index === currentIndex) {
        className = style.fadeout;
      } else if (index === nextIndex) {
        className = style.fadein;
      } else {
        className = style.normal;
      }
      return (
        <Image
          key={name}
          src={`/imgs/slideshow/${name}`}
          fill
          alt=""
          className={className}
        />
      );
    });
    setChildren(slides);
    currentIndexIncrement();
    nextIndexIncrement();
  };
  return children;
};

export const Slideshow = ({ imageFileNames, interval }: Props) => {
  return (
    <SlideshowContainer>
      {Slides({ imageFileNames, interval }).map(
        // map()にkeyを含めという怒られ回避のための冗長な書き方
        (slide) => ({ key: slide, slide: slide }.slide)
      )}
    </SlideshowContainer>
  );
};

const SlideshowContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  margin: 0px auto;
`;
