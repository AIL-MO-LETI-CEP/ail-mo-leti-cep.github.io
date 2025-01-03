import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { BASE_HREF } from 'src/data/const';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <meta property='og:site_name' content='AIL MO LETI CEP' />
          <meta
            property='og:image'
            content='https://ail-mo-leti-cep.github.io/favicon/android-chrome-192x192.png'
          />
          <meta name='twitter:card' content='summary' />
          <meta
            name='description'
            content='アイル共和国文化省の公式ホームページです。'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href={`${BASE_HREF}/favicon/apple-touch-icon.png`}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href={`${BASE_HREF}/favicon/favicon-32x32.png`}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href={`${BASE_HREF}/favicon/favicon-16x16.png`}
          />
          <link rel='mask-icon' href={`${BASE_HREF}/safari-pinned-tab.svg`} color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
