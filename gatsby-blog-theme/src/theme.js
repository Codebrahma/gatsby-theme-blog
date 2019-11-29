const maxContainerWidth = "70rem";
const baseLineHeight = 1.45; //24.8px
const desktopBaseSize = 1.125; //18px
const mobileBaseSize = 1; //16px
const breakpoints = ["52em"];
const scale = [0.75, 1, 1.2, 1.375, 1.6875, 2.5];

const fontSizes = scale.map(n => n * mobileBaseSize + "rem");
fontSizes.desktop = scale.map(n => n * desktopBaseSize + "rem");

const fonts = {
  heading: "TiemposHeadline",
  body: "TiemposText",
  bold: "TiemposBold",
  italic: "TiemposItalic"
};
const lineHeights = [
  0.5 * baseLineHeight + "rem",
  1 * baseLineHeight + "rem",
  1.5 * baseLineHeight + "rem",
  2 * baseLineHeight + "rem",
  2.5 * baseLineHeight + "rem",
  3 * baseLineHeight + "rem"
];
const space = [0, ...lineHeights];

const colors = {
  tint: "#eee",
  black: ["#0F0F0F", "#333333", "#666666", "#999999"]
};
colors.primary = colors.black[1];
colors.secondary = colors.tint;

const styles = {
  body: {
    fontFamily: "body",
    fontSize: [1, "desktop.1"],
    lineHeight: 1
  },
  h1: {
    fontFamily: "heading",
    fontSize: [5, "desktop.5"],
    lineHeight: 3,
    marginTop: [3, 4],
    marginBottom: 1,
    padding: 0
  },
  h2: {
    fontFamily: "heading",
    fontSize: [4, "desktop.4"],
    lineHeight: 2,
    marginTop: [3, 4],
    marginBottom: 1,
    padding: 0
  },
  h3: {
    fontFamily: "heading",
    fontSize: [3, "desktop.3"],
    lineHeight: 1,
    marginTop: [2, 3],
    marginBottom: 1,
    padding: 0
  },
  h4: {
    fontFamily: "heading",
    fontSize: [2, "desktop.2"],
    lineHeight: 1,
    marginTop: 2,
    marginBottom: 1,
    padding: 0
  },
  h5: {
    fontFamily: "heading",
    fontSize: [1, "desktop.1"],
    lineHeight: 1,
    marginTop: 2,
    marginBottom: 1,
    padding: 0
  },
  p: {
    fontFamily: "body",
    fontSize: [1, "desktop.1"],
    lineHeight: 1,
    maxWidth: "40rem",
    marginBottom: [2, 2]
  },
  b: {
    fontFamily: "bold"
  },
  strong: {
    fontFamily: "bold"
  },
  em: {
    fontFamily: "italic"
  },
  i: {
    fontFamily: "italic"
  },
  Container: {
    maxWidth: "71.5rem",
    padding: 0,
    px: ["0.725rem"]
  },
  ul: {
    listStyle: "disc inside none",
    mb: [2, 2]
  },
  ol: {
    listStyle: "decimal inside none"
  },
  li: {
    mb: ["0.5rem", "0.5rem"],
    fontFamily: "body",
    fontSize: [1, "desktop.1"],
    lineHeight: 1,
    maxWidth: "40rem",
    marginBottom: [1, 1]
  }
};

const theme = {
  breakpoints,
  space,
  fontSizes,
  lineHeights,
  maxContainerWidth,
  fonts,
  colors,
  styles
};
export default theme;
