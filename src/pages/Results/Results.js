import React from "react";
import Title from "../../components/common/Title/Title";
import Button from "../../components/common/buttons/Button/Button";
import Table from "../../components/common/Table/Table";
import styles from "./Results.module.css";
import { convertToRegularString } from "../../modules/StringModifiers";
import * as appStyle from "../../App/App.style";

const Results = ({ quizData, restartQuiz }) => {
  const getFinalScore = () => {
    let finalScore = 0;
    for (let _ of quizData) {
      if (_.answers[_.selectedAnswerIndex] === _.correctAnswer) finalScore += 1;
    }
    return finalScore;
  };

  const columns = ["#", "Question", "Your Answer", "Correct Answer"];

  const data = quizData.map((_) => [
    _.questionNumber,
    convertToRegularString(_.question),
    convertToRegularString(_.answers[_.selectedAnswerIndex]),
    convertToRegularString(_.correctAnswer),
  ]);

  return (
    <div className={styles.results}>
      <Title
        className={styles.results__title}
        title={`Final Score: ${getFinalScore()}/${quizData.length}`}
      />
      <Table columns={columns} data={data} title="Overview of Results" />
      <Button
        label={"Restart"}
        variant="contained"
        style={appStyle.buttonStyle}
        onClick={() => restartQuiz()}
      />
    </div>
  );
};

export default Results;
