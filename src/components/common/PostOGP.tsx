import Head from "next/head";
import type { FC } from "react";

type OGPPageType = "article" | "blog";

type Props = {
  readonly title: string;
  readonly type: OGPPageType;
  readonly description: string;
  readonly url: string;
};

export const PostOGP: FC<Props> = ({ title, type, description, url }) => (
  <Head>
    <meta property="og:title" content={`${title} | AIL MO LETI CEP`} />
    <meta property="og:type" content={type} />
    <meta property="og:url" content={url} />
    <meta property="og:description" content={description} />
  </Head>
);
