import React from "react";
import { Container } from "bricks";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          a:visited {
            color: inherit;
          }
          a:hover {
            cursor: pointer;
          }
          body {
            font-family: ${theme.fonts.body};
            color: ${theme.colors.black[1]};
          }
        `}
      />
      <Container>
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
