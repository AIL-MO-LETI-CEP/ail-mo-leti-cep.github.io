import { FC } from 'react';
import Link from 'next/link';

type LinkData = {
  title: string;
  url: string;
  description: string[];
};

type LinkDataList = {
  linkDataList: LinkData[];
};

export const ExternalLinkList: FC<LinkDataList> = ({
  linkDataList,
}: LinkDataList) => (
  <ul>
    {linkDataList.map((linkData: LinkData) => {
      return (
        <ExternalLink
          key={linkData.url}
          title={linkData.title}
          url={linkData.url}
          description={linkData.description}
        />
      );
    })}
  </ul>
);

const ExternalLink: FC<LinkData> = ({ title, url, description = [] }) => {
  return (
    <li>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </Link>
      {description.map((desc) => {
        return (
          <div key={desc}>
            {desc}
          </div>
        );
      })}
    </li>
  );
};
