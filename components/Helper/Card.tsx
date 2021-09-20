import React from "react";
import styled from "styled-components";

interface ICard {
  cardData: string;
  mode: boolean;
}

const Card: React.FC<ICard> = ({ cardData, mode }) => {
  return <CardItem>{cardData}</CardItem>;
};

export default Card;

const CardItem = styled.li`
  height: 100px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.defaultOppositeColor};
  border-radius: 8px;
`;
