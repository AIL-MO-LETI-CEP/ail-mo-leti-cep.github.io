import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { BASE_HREF } from 'src/data/const';

export const Header: React.FC = () => {
  return (
    <header>
      <LogoContainer>
        <Image
          src={`${BASE_HREF}/imgs/huep2_hia1.png`}
          width={60}
          height={60}
          alt='logo'
          style={{ marginRight: '10px' }}
        />
        <div style={{ margin: 'auto 0' }}>
          <Link href='/' className='no-underline'>
            <div lang='ja' style={{ fontSize: '125%' }}>
              アイル共和国文化省
            </div>
            <div lang='x-pektak' style={{ fontSize: '154%' }}>
              AIL MO LETI CEP
            </div>
          </Link>
        </div>
      </LogoContainer>

      <hr />
      <Tab lang='ja'>
        <TabChild>
          <Link href='/abelip'>各種展示</Link>
        </TabChild>
        <TabChild>
          <Link href='/kante-kije'>文献紹介</Link>
        </TabChild>
        <TabChild>
          <Link href='/liju-tude-lukup'>言語講座</Link>
        </TabChild>
        <TabChild>
          <Link href='/blog'>近況報告</Link>
        </TabChild>
      </Tab>
      <hr />
    </header>
  );
};

const LogoContainer = styled.div`
  display: flex;
  padding-top: 4px;
`;

const Tab = styled.ul`
  @media screen and (min-width: 800px) {
    padding-inline-start: 40px;
    padding-inline-end: 40px;
  }
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-weight: bold;
  font-size: 80%;
  align-items: center;
  padding: 0;
`;

const TabChild = styled.li`
  position: relative;
  text-align: center;
  flex: 1;
  border-right: 2px groove #aaa;

  &:hover {
    color: #227464;
  }

  &:last-child {
    border: none;

    :hover {
      color: #227464;
    }
  }

  & a {
    text-decoration: none;
  }
`;
