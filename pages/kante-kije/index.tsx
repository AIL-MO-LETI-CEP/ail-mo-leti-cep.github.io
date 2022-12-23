import Link from "next/link";
import { header } from "../../src/components/header";
import { footer } from "../../src/components/footer";
import { Title, Description } from "../../src/components/common";

const Index = () => {
    return (
        <div>
            {header()}
            
            <main>
                <Title>テクスト読解</Title>
                <Description>このページでは、テクスト読解のログや資料へのリンクを紹介しています。</Description>

                <ul>
                    <li><Link href="https://docs.google.com/document/d/1yJLvWS_bQC3_EDToE5jUp0oDmNB_U6FRadsm0d97Cis">『アイル統一セットカイクの書（藍国統一机戦書）を読む』</Link></li>
                </ul>
            </main>

            {footer()}
        </div>
    );
};

export default Index;
