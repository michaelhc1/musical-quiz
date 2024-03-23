import * as colors from "./standard-colors";

export const buttonStyle = {
  padding: "0.5vh",
  fontSize: "clamp(10px, 1.5vh, 15px)",
  backgroundColor: colors.pink,
  color: "#FFF",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: colors.pink,
    color: "#FFF",
    fontWeight: "bold",
  },
};
