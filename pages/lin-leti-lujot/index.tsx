import Link from "next/link";
import { header } from "src/components/header";
import { footer } from "src/components/footer";
import { Title, Description } from "src/components/common";

const Index = () => {
    return (
        <div>
            {header()}
            
            <main>
                <Title>燐帝字母</Title>
                <Description>このページでは、アイル共和国をはじめとしてファイクレオネ世界で広く使われる文字である燐帝字母について説明しています。</Description>

                <ul>
                    <li><Link href="https://raw.githubusercontent.com/AIL-MO-LETI-CEP/ail-mo-leti-cep.github.io/master/lijuit_kije.pdf">燐字まとめ入門（PDF）</Link></li>
                </ul>
            </main>

            {footer()}
        </div>
    );
};

export default Index;
