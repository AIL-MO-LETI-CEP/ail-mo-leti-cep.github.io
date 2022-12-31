import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

export const Header: React.FC = () => {
  return (
    <header>
      <LogoContainer>
        <Image
          src="/imgs/huep2_hia1.png"
          width={60}
          height={60}
          alt="logo"
          style={{ marginRight: "10px" }}
        />
        <div style={{ marginLeft: "0px" }}>
          <div lang="ja" style={{ fontSize: "125%" }}>
            アイル共和国文化省
          </div>
          <div lang="x-pemecepe" style={{ fontSize: "154%" }}>
            AIL MO LETI CEP
          </div>
        </div>
      </LogoContainer>
      <hr />
      <Tab lang="ja">
        <TabChild>
          <Link href="/">トップ</Link>
        </TabChild>
        <TabChild>
          <Link href="/abelip">各種展示</Link>
        </TabChild>
        <TabChild>
          <Link href="/lin-leti-lujot">燐帝字母</Link>
        </TabChild>
        <TabChild>
          <Link href="/kante-kije">文献読解</Link>
        </TabChild>
        <TabChild>
          <Link href="/lijukulante">教材紹介</Link>
        </TabChild>
      </Tab>
      <hr />
    </header>
  );
};

const LogoContainer = styled.div`
  display: flex;
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
    color: #005242;
  }

  &:last-child {
    border: none;

    :hover {
      color: #005242;
    }
  }

  & a {
    text-decoration: none;
  }
`;
