import React, { useState } from "react";
import styled, { css } from "styled-components";

interface IThemeController {
  mode: boolean;
  setMode: (prev: any) => void;
}

const ThemeController: React.FC<IThemeController> = ({ mode, setMode }) => {
  const toggleMode = () => {
    setMode((state: any) => !state);
  };

  return (
    <Controller onClick={toggleMode} mode={mode}>
      <Thumb mode={mode} />
    </Controller>
  );
};

export default ThemeController;

const Controller = styled.div<{ mode: boolean }>`
  position: relative;
  width: 75px;
  height: 30px;
  background: #e2e2e2;
  border-radius: 30px;
  cursor: pointer;

  ${({ mode }) =>
    mode &&
    css`
      background: #0b95ff;
    `};
`;

const Thumb = styled.div<{ mode: boolean }>`
  position: absolute;
  left: 0;
  width: 26px;
  height: 26px;
  margin: 2px;
  border-radius: 50%;
  background: #fff;
  transition: all 0.2s ease-in-out;

  ${({ mode }) =>
    mode &&
    css`
      left: 100%;
      transform: translateX(calc(-100% - 4px));
    `};
`;
