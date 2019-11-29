import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css } from "bricks";
import theme from "../theme";

export default styled(Link)(
  css({
    bg: `${theme.colors.tint}`,
    color: `${theme.colors.black[1]}`,
    fontSize: "0",
    px: "6px",
    py: "2px",
    display: "inline-block",
    borderRadius: "6px",
    border: `1px solid ${theme.colors.black[1]}`,
    textDecoration: "none",
    "&:hover": {
      bg: `${theme.colors.black[1]}`,
      color: `${theme.colors.tint}`
    },
    ":visited": {
      bg: `${theme.colors.tint}`,
      color: `${theme.colors.black[1]}`,
      "&:hover": {
        bg: `${theme.colors.black[1]}`,
        color: `${theme.colors.tint}`
      }
    }
  })
);
