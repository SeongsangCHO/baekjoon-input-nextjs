import React from "react";
import Card from "./Card";
import { CARD_LIST } from "utils/constant";
import styled from "styled-components";

interface ICardList {
  mode: boolean;
}

const CardList: React.FC<ICardList> = ({ mode }) => {
  return (
    <CardContainer>
      <ul>
        {CARD_LIST.map((card) => (
          <Card cardData={card.data} {...{ mode }} />
        ))}
      </ul>
    </CardContainer>
  );
};

export default CardList;

const CardContainer = styled.div<{ theme: any }>`
  max-width: 1080px;
  width: 100%;
  background: ${({ theme }) => theme.colors.defaultColor};
  padding: 15px;
  margin-top: 50px;
  border-radius: 15px;

  & > ul {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;

    @media screen and (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }
`;
