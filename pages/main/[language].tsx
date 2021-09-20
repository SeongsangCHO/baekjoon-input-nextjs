import type { NextPage } from "next";
import { useRouter } from "next/router";
import Header from "components/Common/Header/Header";
import Helper from "components/Helper/Helper";
import styled from "styled-components";

interface INextPage {
  mode: boolean;
  setMode: (prev: any) => void;
}

const Main: NextPage<INextPage> = ({ mode, setMode }) => {
  const router = useRouter();
  const { language } = router.query;

  return (
    <PageTemplate>
      <PageContainer>
        <Header {...{ mode, setMode }} />
        <Helper {...{ mode, setMode }}>{language}</Helper>
      </PageContainer>
    </PageTemplate>
  );
};

export default Main;

const PageTemplate = styled.main`
  width: 100wh;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
  transition: 0.4s;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1080px;
  width: 100%;
  height: 100vh;
  padding: 0 15px;
`;
