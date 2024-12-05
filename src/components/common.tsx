import styled from '@emotion/styled';

export const PageTitle = styled.div`
  margin: 30px 0 10px 0;
  text-align: center;
  font-size: x-large;

  @media screen and (max-width:768px) {
    margin: 20px 0 10px 0;
  }
`;

export const PageDescription = styled.div`
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
