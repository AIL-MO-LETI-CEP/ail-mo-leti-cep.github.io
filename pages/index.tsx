import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import { Description } from "src/components/common";

const Index = () => {
  return (
    <div>
      <Header />

      <main>
        <Description>アイル共和国へようこそ！</Description>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
