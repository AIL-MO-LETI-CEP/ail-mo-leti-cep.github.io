import { header } from '../src/components/header'
import { footer } from '../src/components/footer'
import { Description } from '../src/components/common';

const Index = () => {
  return (
    <div>
      {header()}

      <main>
        <Description>アイル共和国へようこそ！</Description>
      </main>
      
      {footer()}
    </div>
  );
};

export default Index;
