import styled from '@emotion/styled';
import { Post } from 'pages/api/posts';
import PostItem from './PostItem';

type Props = {
  posts: Post[];
};

export default function PostItemList({ posts }: Props) {
  return (
    <Wrap>
      <ListContainer>
        {posts
          .sort((a, b) => (a.date < b.date ? 1 : -1))
          .map((post) => (
            <PostItem
              key={post.path}
              author={post.author.name}
              date={post.date}
              excerpt={post.excerpt}
              path={post.path}
              title={post.title}
            />
          ))}
      </ListContainer>
    </Wrap>
  );
}

const Wrap = styled.main`
  display: flex;
  flex-direction: "column";
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & article:not(:last-child) {
    border-bottom: 1px solid #666;
  }
`;
