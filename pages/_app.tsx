import 'styles/globals.css';
import { Footer } from 'src/components/footer';
import { Header } from 'src/components/header';
import { PageTitleProvider } from 'src/hooks/usePageTitle';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageTitleProvider suffix="AIL MO LETI CEP" delimiter="|">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </PageTitleProvider>
  );
}
