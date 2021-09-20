import React from "react";
import CardList from "components/Helper/CardList";
import styled from "styled-components";

interface IHelper {
  children?: React.ReactNode;
  mode: boolean;
}

const Helper: React.FC<IHelper> = ({ children, mode }) => {
  return (
    <HelperContainer>
      <span>예제와 동일한 형태의 Input코드를 복사해 사용하세요.</span>
      <InputWrapper>
        <span>선택언어 : {children}</span>
        <input type="number" placeholder="문제 번호 검색 (예, 3126)" />
      </InputWrapper>
      <CardList {...{ mode }} />
    </HelperContainer>
  );
};

export default Helper;

const HelperContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90vh;
  color: ${({ theme }) => theme.colors.landingText};

  & > span {
    font-weight: bold;
    margin: 50px 0;
    font-size: 20px;
    word-break: keep-all;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > input {
    padding: 15px 12px;
    margin-top: 15px;
    background-color: ${({ theme }) => theme.colors.defaultColor};
    border: 1px solid ${({ theme }) => theme.colors.borderBlue};
    color: ${({ theme }) => theme.colors.defaultOppositeColor};
  }

  & > input::placeholder {
    color: ${({ theme }) => theme.colors.defaultOppositeColor};
  }

  & > input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
