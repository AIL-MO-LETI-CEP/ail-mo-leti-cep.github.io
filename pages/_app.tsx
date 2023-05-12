import "styles/globals.css";
import type { AppProps } from "next/app";
import { PageTitleProvider } from "src/hooks/usePageTitle";
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("zenn-embed-elements");
  }, []);

  return (
    <PageTitleProvider suffix="AIL MO LETI CEP" delimiter="|">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </PageTitleProvider>
  );
}
