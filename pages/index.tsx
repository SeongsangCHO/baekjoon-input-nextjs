import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Illustrator from "assets/landingcover.svg";
import LanguageDropDown from "components/DropDown";

interface INextPage {
  mode: boolean;
  setMode: (prev: any) => void;
}

const Home: NextPage<INextPage> = ({ mode, setMode }) => {
  return (
    <PageTemplate>
      <Container>
        <TitleHeader>
          <TextWrapper>
            <h1>
              여기서
              <br />
              보고쓰다보면
              <br />
              외워지겠지
            </h1>
          </TextWrapper>
          <ModeToggleButton onClick={() => setMode((prev: any) => !prev)}>Mode</ModeToggleButton>
        </TitleHeader>
        <ImageWrapper>
          <Image className="landing-cover-img" width={260} height={260} src={Illustrator} />
        </ImageWrapper>
        <TextWrapper>
          <h1 className="emphasis-text">백준 문제별,</h1>
          <h1>Input Code를 확인하세요.</h1>
        </TextWrapper>
        <LanguageDropDown />
      </Container>
    </PageTemplate>
  );
};

export default Home;

const PageTemplate = styled.main`
  width: 100wh;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
  transition: 0.4s;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 480px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const TitleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
`;

const ModeToggleButton = styled.button`
  width: 50px;
  height: 50px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TextWrapper = styled.div`
  color: ${({ theme }) => theme.colors.landingText};
  font-weight: bold;
  font-size: 36px;
  padding-left: 50px;
  animation-name: bounding;
  animation-duration: 1s;
  animation-iteration-count: 1;
  & .emphasis-text {
    color: ${({ theme }) => theme.colors.landingEmphasisText};
  }
  @keyframes bounding {
    from {
      transform: translateY(5px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;
