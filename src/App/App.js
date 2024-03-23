import React, { useState } from "react";
import Menu from "../pages/Menu/Menu";
import Questions from "../pages/Questions/Questions";
import Results from "../pages/Results/Results";
import AlertPrompt from "../components/common/modals/Alert";
import styles from "./App.module.css";

function App() {
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [category, setCategory] = useState({
    name: "Any Category",
    id: null,
  });
  const [difficulty, setDifficulty] = useState({
    name: "Any Difficulty",
    value: null,
  });
  const [type, setType] = useState({
    name: "Any Type",
    value: null,
  });
  const [quizData, setQuizData] = useState(null);
  const [useDuration, setUseDuration] = useState("no");
  const [quizDuration, setQuizDuration] = useState(10);
  const [currentPage, setCurrentPage] = useState("menu");
  const [errorPrompt, setErrorPrompt] = useState(false);

  const toggleErrorPrompt = () => setErrorPrompt(!errorPrompt);

  const changeNumberOfQuestions = (event) =>
    setNumberOfQuestions(parseFloat(event.target.value));

  const changeQuizDuration = (event) =>
    setQuizDuration(parseFloat(event.target.value));

  const changeCategory = (event, selectedOption) => setCategory(selectedOption);

  const changeDifficulty = (event, selectedOption) =>
    setDifficulty(selectedOption);

  const changeType = (event, selectedOption) => setType(selectedOption);

  const changeUseDuration = (event) => {
    setUseDuration(event.target.value);
  };

  const isNumberOfQuestionsValid =
    numberOfQuestions >= 1 &&
    numberOfQuestions <= 50 &&
    numberOfQuestions % 1 === 0;

  const isFormValid = quizDuration > 0 && isNumberOfQuestionsValid;

  const startQuiz = () => {
    if (isFormValid) {
      setCurrentPage("questions");
      fetch(
        `https://opentdb.com/api.php?amount=${numberOfQuestions}${
          category && category.id ? `&category=${category.id}` : ""
        }${
          difficulty && difficulty.value
            ? `&difficulty=${difficulty.value}`
            : ""
        }${type && type.value ? `&type=${type.value}` : ""}`
      )
        .then((response) => response.json())
        // .then((data) => console.log({ data }));
        .then((data) =>
          setQuizData(
            data.results.map((object, index) => {
              return {
                questionNumber: index,
                question: object.question,
                answers: object.incorrect_answers
                  .concat(object.correct_answer)
                  .sort(),
                correctAnswer: object.correct_answer,
                selectedAnswerIndex: null,
              };
            })
          )
        );
    } else toggleErrorPrompt();
  };

  const restartQuiz = () => {
    setQuizData(null);
    setCurrentPage("menu");
  };

  const menuActions = {
    changeNumberOfQuestions,
    changeCategory,
    changeDifficulty,
    changeType,
    setCurrentPage,
    startQuiz,
    changeQuizDuration,
    changeUseDuration,
  };
  const menuState = {
    numberOfQuestions,
    category,
    difficulty,
    type,
    isFormValid,
    useDuration,
    quizDuration,
    isNumberOfQuestionsValid,
  };
  return (
    <div className={styles.App}>
      <div className={styles.App__card}>
        {currentPage === "menu" && (
          <Menu menuActions={menuActions} menuState={menuState} />
        )}
        {currentPage === "questions" && (
          <Questions
            quizData={quizData}
            setQuizData={setQuizData}
            setCurrentPage={setCurrentPage}
            restartQuiz={restartQuiz}
            quizDuration={quizDuration}
            useDuration={useDuration}
            currentPage={currentPage}
          />
        )}
        {currentPage === "results" && (
          <Results
            quizData={quizData}
            setQuizData={setQuizData}
            setCurrentPage={setCurrentPage}
            restartQuiz={restartQuiz}
          />
        )}
        <AlertPrompt
          title="Error"
          text="Please fix all errors before clicking start."
          open={errorPrompt}
          togglePrompt={toggleErrorPrompt}
        />
      </div>
    </div>
  );
}

export default App;
