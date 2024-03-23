import React from "react";
import AnswerButton from "../common/buttons/Button/Button";
import styles from "./AnswerGrid.module.css";
import * as style from "./AnswerGrid.style";

const AnswerGrid = ({
  answers,
  setSelectedAnswerIndex,
  selectedAnswerIndex,
}) => {
  const isBoolean = answers && answers.length === 2;

  return (
    <div className={styles.answerGrid}>
      <AnswerButton
        label={isBoolean ? answers && answers[1] : answers && answers[0]}
        variant="contained"
        onClick={
          isBoolean
            ? () => setSelectedAnswerIndex(1)
            : () => setSelectedAnswerIndex(0)
        }
        style={
          isBoolean
            ? selectedAnswerIndex === 1
              ? style.selectedButtonStyle
              : style.nonSelectedButtonStyle
            : selectedAnswerIndex === 0
            ? style.selectedButtonStyle
            : style.nonSelectedButtonStyle
        }
      />
      <AnswerButton
        label={isBoolean ? answers && answers[0] : answers && answers[1]}
        variant="contained"
        onClick={
          isBoolean
            ? () => setSelectedAnswerIndex(0)
            : () => setSelectedAnswerIndex(1)
        }
        style={
          isBoolean
            ? selectedAnswerIndex === 0
              ? style.selectedButtonStyle
              : style.nonSelectedButtonStyle
            : selectedAnswerIndex === 1
            ? style.selectedButtonStyle
            : style.nonSelectedButtonStyle
        }
      />
      {!isBoolean && (
        <AnswerButton
          label={answers && answers[2]}
          variant="contained"
          onClick={() => setSelectedAnswerIndex(2)}
          style={
            selectedAnswerIndex === 2
              ? style.selectedButtonStyle
              : style.nonSelectedButtonStyle
          }
        />
      )}
      {!isBoolean && (
        <AnswerButton
          label={answers && answers[3]}
          variant="contained"
          onClick={() => setSelectedAnswerIndex(3)}
          style={
            selectedAnswerIndex === 3
              ? style.selectedButtonStyle
              : style.nonSelectedButtonStyle
          }
        />
      )}
    </div>
  );
};

export default AnswerGrid;
