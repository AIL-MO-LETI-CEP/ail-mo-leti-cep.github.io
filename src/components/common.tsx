import styled from "@emotion/styled";

export const Title = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: x-large;
`;

export const Description = styled.div`
  text-align: center;
`;

export const IframeContainer = styled.div`
  position: relative;
  padding: 28.12% 0;
  height: 0;
  overflow: hidden;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
