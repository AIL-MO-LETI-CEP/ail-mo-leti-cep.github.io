import { ParsedUrlQuery } from "querystring";
import styled from "@emotion/styled";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { PageTitle } from "src/components/common";
import { PostOGP } from "src/components/common/PostOGP";
import {
  TitlePMCF,
  lanermeFolkloreTitlePMCF,
  lanermeFolkloreData,
  LanermeFolklore,
} from "src/data/lanerme-folklore";
import usePageTitle from "src/hooks/usePageTitle";

type Props = {
  readonly page: LanermeFolklore;
};

const Page: NextPage<Props> = ({ page }: Props) => {
  const router = useRouter();
  usePageTitle(page.title);

  const arrayToMarkdown = (strArray: string[]) => {
    return strArray.map((str) => (
      <ReactMarkdown
        key={str}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {str}
      </ReactMarkdown>
    ));
  };
  if (!router.isFallback && !page.title) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Wrap>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <PostOGP
            title={page.title}
            type='article'
            url={`https://ail-mo-leti-cep.github.io/laneme-penulleti-lukup-lukup/${page.title}/`}
            description='日本に伝わっている燐字文献のうち大きな割合を占める『羅古論』を特集しています。'
          />
          <main>
            <div>
              <PageTitle>{page.title}</PageTitle>
              {arrayToMarkdown(page.description)}
            </div>
            <h2>原文</h2>
            <h3>燐字表記</h3>
            <div lang='x-linmarn'>{arrayToMarkdown(page.text.linmarn)}</div>
            <h3>漢字転写</h3>
            <div>{arrayToMarkdown(page.text.linmarn)}</div>
            <h2>訳文</h2>
            <h3>日本語訳</h3>
            <div>{arrayToMarkdown(page.text.japanese)}</div>
            <h3>書き下し文</h3>
            <div style={{ lineHeight: 2.2 }}>
              {page.text.withruby.map((text) => {
                return (
                  <ReactMarkdown
                    key={text}
                    rehypePlugins={[rehypeRaw, rehypeSanitize]}
                    remarkPlugins={[remarkGfm]}
                  >
                    {text
                      .replaceAll("{", "<ruby>")
                      .replaceAll("}", "</ruby>")
                      .replaceAll("(", "<rt>")
                      .replaceAll(")", "</rt>")}
                  </ReactMarkdown>
                );
              })}
            </div>
          </main>
        </>
      )}
    </Wrap>
  );
};

export default Page;

type Params = ParsedUrlQuery & {
  readonly pid: TitlePMCF;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (!params) {
    throw Error("getStaticPaths failed!");
  }
  const folklore = lanermeFolkloreData[params.pid];

  return {
    props: {
      page: {
        ...folklore,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: lanermeFolkloreTitlePMCF.map((title) => {
      return {
        params: {
          pid: title,
        },
      };
    }),
    fallback: false,
  };
};

const Wrap = styled.main`
  @media screen and (min-width: 450px) {
    margin: auto 100px;
  }
`;
