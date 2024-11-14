import { FC } from "react";
import Link from "next/link";

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
          key={linkData.title}
          title={linkData.title}
          url={linkData.url}
          description={linkData.description}
        />
      );
    })}
  </ul>
);

const ExternalLink: FC<LinkData> = ({ title, url, description = [] }) => {
  if (description.length === 0) {
    return (
      <li>
        <Link key={url} href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </Link>
      </li>
    );
  } else {
    return (
      <li>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </Link>
        {description.map((desc) => {
          return (
            <>
              <br />
              {desc}
            </>
          );
        })}
      </li>
    );
  }
};
