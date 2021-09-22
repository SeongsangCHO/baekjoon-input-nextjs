import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const LANGUAGE = ["JavaScript", "Python"];

const LanguageDropDown: React.FC = () => {
  const [text, setText] = useState<string | undefined>("사용하시는 언어를 선택해주세요");
  const [listToggle, setListToggle] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const handleItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLInputElement;
    setText(target.dataset.value);
    setIsSelected(true);
    setListToggle(false);
  };
  return (
    <Container>
      <Box>
        <SelectedText onClick={() => setListToggle((prev) => !prev)}>{text}</SelectedText>
        <DropButton listToggle={listToggle} onClick={() => setListToggle((prev) => !prev)}>
          <div>▼</div>
        </DropButton>
        <LanguageList>
          {listToggle && (
            <>
              {LANGUAGE.map((lang) => (
                <Item key={lang} data-value={lang} onClick={handleItemClick}>
                  {lang}
                </Item>
              ))}
            </>
          )}
        </LanguageList>
      </Box>
      {isSelected && !listToggle && (
        <MovePageButton>
          <Link href={"/main/" + text?.toLowerCase()}>
            <a>👉코드보기</a>
          </Link>
        </MovePageButton>
      )}
    </Container>
  );
};

export default LanguageDropDown;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Box = styled.div`
  width: 250px;
  padding: 15px 15px 15px 10px;
  background-color: ${({ theme }) => theme.colors.defaultColor};

  border: 1px solid ${({ theme }) => theme.colors.borderBlue};
  position: relative;
`;

const LanguageList = styled.ul`
  color: ${({ theme }) => theme.colors.defaultOppositeColor};
  position: absolute;
  top: 100%;
  left: -1px;
  max-height: 150px;
  width: 100%;
  max-width: 250px;
  background-color: ${({ theme }) => theme.colors.defaultColor};
  border: 1px solid ${({ theme }) => theme.colors.borderBlue};
  & li + li {
    border-top: 1px solid ${({ theme }) => theme.colors.borderBlue};
  }
`;
const Item = styled.li`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.defaultOppositeColor};
    color: ${({ theme }) => theme.colors.defaultColor};
  }
`;
const SelectedText = styled.span`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  color: ${({ theme }) => theme.colors.defaultOppositeColor};
  font-size: 14px;
  cursor: pointer;
`;

const DropButton = styled.button<{ listToggle?: boolean }>`
  transition: 0.6s;
  position: absolute;
  right: 10px;
  height: 20px;
  top: 50%;
  transform: translate(0, -50%);
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  cursor: pointer;
  & div {
    width: 100%;
    transition: 0.6s;
    color: white;
    ${(props) => props.listToggle && "transform: rotate(180deg)"};
  }
`;

const MovePageButton = styled.div`
  font-size: 20px;
  padding: 6px 0 0 5px;
  color: ${({ theme }) => theme.colors.defaultOppositeColor};
  position: absolute;
  top: 100%;
`;
