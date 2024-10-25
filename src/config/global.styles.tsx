import React, { PropsWithChildren } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const GlobalStylesWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default GlobalStylesWrapper;
