import { PostOGP } from 'src/components/common/PostOGP';
import usePageTitle from 'src/hooks/usePageTitle';
import IndexPage from 'src/pages/index';

const Index = () => {
  usePageTitle();
  return (
    <div>
      <PostOGP
        title=""
        type="website"
        url="https://ail-mo-leti-cep.github.io/"
        description="アイル共和国文化省の公式ホームページです。"
      />
      <IndexPage />
    </div>
  );
};

export default Index;
