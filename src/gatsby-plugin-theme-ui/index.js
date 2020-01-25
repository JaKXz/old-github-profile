import theme from "@theme-ui/preset-base";

export default {
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: `'Cochin', 'Libre Baskerville', serif`,
    body: `'Open Sans', ${theme.fonts.body}`,
  },
  layout: {
    container: {
      maxWidth: 960,
    },
  },
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: "body",
      fontWeight: "body",
    },
  },
};
