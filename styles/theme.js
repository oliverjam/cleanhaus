import { hsl } from "polished";

const colours = {
  blue: "blue",
  red: "tomato",
  darkGrey: hsl(220, 0.2, 0.2),
  offWhite: hsl(220, 0.2, 0.98)
};

export default {
  size: {
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  palette: {
    primary: colours.red,
    secondary: colours.green,
    dark: colours.darkGrey,
    light: colours.offWhite
  }
};
