import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "lib/api";
import { PostOGP } from "src/components/common/PostOGP";
import usePageTitle from "src/hooks/usePageTitle";
import { Post } from "src/model/Post";

type Props = {
  readonly post: Post;
};

const Post: NextPage<Props> = ({ post }: Props) => {
  const router = useRouter();
  usePageTitle(post?.title);
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      <div />
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <PostOGP
            title={post.title}
            description={post.excerpt}
            type="article"
            url={`https://ail-mo-leti-cep.github.io/blog/${post.slug}`}
          />
          <article>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw, rehypeSanitize]}
              remarkPlugins={[remarkGfm]}
            >
              {post.content}
            </ReactMarkdown>
          </article>
        </>
      )}
    </div>
  );
};

export default Post;

type Params = ParsedUrlQuery & {
  readonly slug: string;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (!params) {
    throw Error("getStaticPaths failed!");
  }
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
  ]) as unknown as Post;

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
