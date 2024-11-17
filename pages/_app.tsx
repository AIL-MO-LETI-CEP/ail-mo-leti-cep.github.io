import "styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";
import { PageTitleProvider } from "src/hooks/usePageTitle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageTitleProvider suffix="AIL MO LETI CEP" delimiter="|">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </PageTitleProvider>
  );
}
