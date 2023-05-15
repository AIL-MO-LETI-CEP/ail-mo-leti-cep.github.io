import styled from "@emotion/styled";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer style={{ marginTop: "30px" }}>
      <hr />
      <Copyright>
        Copyright ©{" "}
        <span
          lang="x-pemecepe"
          style={{ fontSize: "120%", textDecoration: "underline" }}
        >
          <Link href="/">AIL MO LETI CEP</Link>
        </span>{" "}
        2021
      </Copyright>
    </footer>
  );
};

const Copyright = styled.p`
  text-align: center;
  font-size: smaller;
  color: #666;
`;
