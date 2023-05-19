import Head from "next/head";
import { getAllPosts } from "pages/api/posts";
import { Title, Description } from "src/components/common";
import { PostOGP } from "src/components/common/PostOGP";
import usePageTitle from "src/hooks/usePageTitle";
import PostItemList from "src/pages/blog/PostItemList";

type Props = Awaited<ReturnType<typeof getStaticProps>>["props"];

const Index = ({ posts }: Props) => {
  usePageTitle("広報処近況ブログ");
  return (
    <div>
      <Head>
        <PostOGP
          title="広報処近況ブログ"
          type="article"
          url="https://ail-mo-leti-cep.github.io/blog"
          description="アイル共和国文化省広報処の近況ブログです。"
        />
      </Head>
      <main>
        <Title>広報処近況ブログ</Title>
        <Description></Description>
        <PostItemList posts={posts} />
      </main>
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
  };
};
