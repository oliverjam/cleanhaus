import { hsl } from "polished";

const colours = {
  blue: "blue",
  red: "tomato",
  darkGrey: hsl(220, 0.2, 0.2),
  midGrey: hsl(220, 0.2, 0.6),
  lightGrey: hsl(220, 0.2, 0.8),
  offWhite: hsl(220, 0.2, 0.98)
};

export default {
  size: {
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "2.5rem",
    radius: "2px"
  },
  palette: {
    primary: colours.red,
    secondary: colours.green,
    textDark: colours.darkGrey,
    textLight: colours.offWhite,
    shadow: colours.midGrey,
    ...colours
  }
};
