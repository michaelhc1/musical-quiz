import * as colors from "../../App/standard-colors";

export const nonSelectedButtonStyle = {
  padding: "0.5vh",
  backgroundColor: colors.lightBeige,
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: colors.lightBeige,
    color: "black",
    fontWeight: "bold",
  },
};

export const selectedButtonStyle = {
  padding: "0.5vh",
  backgroundColor: colors.pink,
  color: "#FFF",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: colors.pink,
    color: "#FFF",
    fontWeight: "bold",
  },
};
