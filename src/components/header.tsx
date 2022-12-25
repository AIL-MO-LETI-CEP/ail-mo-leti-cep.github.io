import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

export const header = () => {
    return (
        <header>
            <HeaderLogoContainer>
                <Image src="/imgs/huep2_hia1.png" width={60} height={60} alt="logo" style={{marginRight: "10px"}}/>
                <div style={{marginLeft: "0px"}}>
                    <div lang="ja" style={{fontSize: "125%"}}>アイル共和国文化省</div>
                    <div lang="x-pemecepe" style={{fontSize: "154%"}}>AIL MO LETI CEP</div>
                </div>
            </HeaderLogoContainer>
            <hr />
            <HeaderTab lang="ja">
                <HeaderTabChild><Link href="/">トップ</Link></HeaderTabChild>
                <HeaderTabChild><Link href="/abelip">各種展示</Link></HeaderTabChild>
                <HeaderTabChild><Link href="/lin-leti-lujot">燐帝字母</Link></HeaderTabChild>
                <HeaderTabChild><Link href="/kante-kije">テクスト読解</Link></HeaderTabChild>
                <HeaderTabChild><Link href="/lijukulante">教材紹介</Link></HeaderTabChild>
            </HeaderTab>
            <hr />
        </header>
    )
};

const HeaderLogoContainer = styled.div`
    display: flex;
`;

const HeaderTab = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-weight: bold;
    font-size: 80%;
    padding-inline-start: 40px;
    padding-inline-end: 40px;
    align-items: center;
`;

const HeaderTabChild = styled.li`
    position: relative;
    text-align: center;
    flex: 1;
    border-right: 2px groove #aaa;

    &:hover{
        color: #005242;
    }

    &:last-child{
        border: none;
        
        :hover{
            color: #005242;
        }
    }

    & a {
        text-decoration: none;
    }
`;