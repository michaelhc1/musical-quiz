// Color constants
import * as colors from "../../App/standard-colors";

export const unhighlightedBlack = "black";
export const highlightedPink = colors.pink;

export const difficulties = [
  { name: "Any Difficulty", value: null },
  { name: "Easy", value: "easy" },
  { name: "Medium", value: "medium" },
  { name: "Hard", value: "hard" },
];

export const types = [
  { name: "Any Type", value: null },
  { name: "Multiple Choice", value: "multiple" },
  { name: "True / False", value: "boolean" },
];

export const textFieldStyle = {
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: unhighlightedBlack,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: highlightedPink,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: highlightedPink,
      borderWidth: "medium",
    },
    "& .MuiInputLabel-root": {
      color: unhighlightedBlack,
    },
    "&:hover .MuiInputLabel-root": {
      color: highlightedPink,
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: highlightedPink,
      fontWeight: "bold",
    },
  },
};

export const textFieldInputStyle = {
  minHeight: "2px",
  height: "3vh",
  fontSize: "clamp(10px, 2vh, 15px)",
};

export const dropdownStyle = {
  root: {
    "& .MuiAutocomplete-inputRoot .MuiOutlinedInput-notchedOutline": {
      borderColor: unhighlightedBlack,
    },
    "&:hover .MuiAutocomplete-inputRoot .MuiOutlinedInput-notchedOutline": {
      borderColor: highlightedPink,
    },
    "& .MuiAutocomplete-inputRoot.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: highlightedPink,
      borderWidth: "medium",
    },
    "& .MuiInputLabel-root": {
      color: unhighlightedBlack,
    },
    "&:hover .MuiInputLabel-root": {
      color: highlightedPink,
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: highlightedPink,
      fontWeight: "bold",
    },
  },
  inputRoot: {
    minHeight: "30px",
    height: "5vh",
    fontSize: "clamp(10px, 2vh, 15px)",
  },
};
