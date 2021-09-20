import React from "react";
import ThemeController from "./ThemeController";
import styled from "styled-components";

interface IHeader {
  mode: boolean;
  setMode: (prev: any) => void;
}

const Header: React.FC<IHeader> = ({ mode, setMode }) => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <span>Beak Joon Helper</span>
        <ThemeController {...{ mode, setMode }} />
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  color: ${({ theme }) => theme.colors.defaultOppositeColor};
`;

const HeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    font-weight: bold;
    font-size: 24px;
  }
`;
