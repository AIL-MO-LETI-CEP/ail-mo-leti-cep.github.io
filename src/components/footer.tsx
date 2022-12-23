import styled from "@emotion/styled";

export const footer = () => {
    return (
        <footer style={{marginTop: "30px"}}>
            <hr />
            <Copyright>Copyright © <span lang="x-pemecepe" style={{fontSize: "120%", textDecoration: "underline"}}><a href="/">AIL MO LETI CEP</a></span> 2021</Copyright>
        </footer>
    );
};

const Copyright = styled.p`
    text-align: center;
    font-size: smaller;
    color: #666;
`