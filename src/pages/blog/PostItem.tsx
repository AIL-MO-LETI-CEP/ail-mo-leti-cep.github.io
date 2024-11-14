import styled from "@emotion/styled";
import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  path: string;
};

export default function PostItem({
  author,
  date,
  excerpt,
  title,
  path,
}: Props) {
  return (
    <Article>
      <Link href={`blog/${path}`} className="no-underline">
        <Headline>
          <Title>{title}</Title>
          <Author>{author}</Author>
          <Date>{date}</Date>
        </Headline>
        <Excerpt>{excerpt}</Excerpt>
      </Link>
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
  &:hover {
    background-color: #00524210;
  }
`;

const Headline = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  margin-bottom: 5px;
`;

const Title = styled.h2`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: auto;
  max-width: 70%;
`;

const Author = styled.span`
  color: #ca1c0a;
  &:before {
    display: inline-block;
    content: "@";
  }
  margin-right: 5px;
`;

const Date = styled.span`
  color: #666;
`;

const Excerpt = styled.div`
  color: #444;
`;
