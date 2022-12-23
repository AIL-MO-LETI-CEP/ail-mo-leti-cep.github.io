import { header } from "../../src/components/header";
import { footer } from "../../src/components/footer";
import { Title, Description } from "../../src/components/common";

const Index = () => {
    return (
        <div>
            {header()}

            <main>
                <div>
                    <Title>展示</Title>
                    <Description>このページでは、過去に行われた展示のアーカイブを提供しています。</Description>
                </div>
                <div>
                    <ul>
                        <li><a href="abelip/pemecepe-poster">ポスター展示</a></li>
                        <li><a href="abelip/nf2022">京都大学11月祭特設サイト</a></li>
                    </ul>
                </div>
            </main>

            {footer()}
        </div>
    );
};

export default Index;
