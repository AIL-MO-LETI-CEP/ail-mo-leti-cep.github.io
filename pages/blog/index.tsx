import Head from 'next/head';
import { getAllPosts } from 'pages/api/posts';
import { PageTitle, PageDescription } from 'src/components/common';
import { PostOGP } from 'src/components/common/PostOGP';
import usePageTitle from 'src/hooks/usePageTitle';
import PostItemList from 'src/pages/blog/PostItemList';

type Props = Awaited<ReturnType<typeof getStaticProps>>['props'];

const Index = ({ posts }: Props) => {
  usePageTitle('広報処近況ブログ');
  return (
    <div>
      <PostOGP
        title='広報処近況ブログ'
        type='article'
        url='https://ail-mo-leti-cep.github.io/blog'
        description='アイル共和国文化省広報処の近況ブログです。'
      />
      <Head>
        <></>
      </Head>
      <main>
        <PageTitle>広報処近況ブログ</PageTitle>
        <PageDescription></PageDescription>
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
