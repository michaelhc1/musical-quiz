import React, { useState, useEffect } from "react";
import AnswerGrid from "../../components/AnswerGrid/AnswerGrid";
import LeftArrowIconButton from "../../components/common/buttons/iconButtons/LeftArrowIconButton";
import RestartIconButton from "../../components/common/buttons/iconButtons/RestartIconButton";
import RightArrowIconButton from "../../components/common/buttons/iconButtons/RightArrowIconButton";
import LoadingIndicator from "../../components/common/LoadingIndicator/LoadingIndicator";
import Title from "../../components/common/Title/Title";
import ProgressBar from "../../components/common/progress/ProgressBar";
import ConfirmationPrompt from "../../components/common/modals/Confirmation";
import AlertPrompt from "../../components/common/modals/Alert";
import CountdownClock from "react-countdown-clock";
import { convertToRegularString } from "../../modules/StringModifiers";
import moment from "moment";
import styles from "./Questions.module.css";
import * as colors from "../../App/standard-colors";

const Questions = ({
  quizData,
  setQuizData,
  setCurrentPage,
  restartQuiz,
  useDuration,
  quizDuration,
  currentPage,
}) => {
  const [questionId, setQuestionId] = useState(0);
  const [confirmationPrompt, setconfirmationPrompt] = useState(false);
  const [alertPrompt, setAlertPrompt] = useState(false);
  const [countdown, setCountdown] = useState(null);

  const deadline = moment().add(quizDuration, "minutes");

  const toggleConfirmationPrompt = () =>
    setconfirmationPrompt(!confirmationPrompt);

  const toggleAlertPrompt = () => setAlertPrompt(!alertPrompt);

  const selectedAnswerIndex =
    quizData &&
    quizData[questionId] &&
    quizData[questionId].selectedAnswerIndex;
  const incrementQuestionId = () => setQuestionId(questionId + 1);
  const decrementQuestionId = () => setQuestionId(questionId - 1);

  const onClickBackButton = () => {
    if (
      quizData[questionId].selectedAnswerIndex ||
      quizData[questionId].selectedAnswerIndex === 0
    )
      setSelectedAnswerIndex(quizData[questionId].selectedAnswerIndex);
    else setSelectedAnswerIndex(null);
    decrementQuestionId();
  };

  const onClickNextButton = () => {
    if (
      quizData[questionId].selectedAnswerIndex ||
      quizData[questionId].selectedAnswerIndex === 0
    )
      setSelectedAnswerIndex(quizData[questionId].selectedAnswerIndex);
    else setSelectedAnswerIndex(null);
    incrementQuestionId();
  };

  const setSelectedAnswerIndex = (selectedAnswerIndex) =>
    setQuizData(
      quizData.map((object, index) =>
        index === questionId
          ? { ...quizData[questionId], selectedAnswerIndex }
          : object
      )
    );

  const onClickFinishButton = () => {
    setCurrentPage("results");
  };

  // Start countdown
  useEffect(() => {
    if (useDuration === "yes") {
      const startCountdown = setInterval(() => {
        const now = moment();
        const currentTimeLeft = moment.duration(deadline.diff(now));
        if (currentTimeLeft.asSeconds() > 0 && currentPage === "questions") {
          console.log("Decrement");
          setCountdown(currentTimeLeft.asSeconds());
        } else {
          clearInterval(startCountdown);
          console.log("Done");
        }
      }, 1000);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div>
        {quizData && quizData.length > 0 ? (
          <div className={styles.questionsContainer}>
            {useDuration === "yes" && (
              <div className={styles.questions__countdownTimer}>
                <CountdownClock
                  seconds={quizDuration * 60}
                  showMilliseconds={true}
                  timeFormat="hms"
                  color={`${
                    countdown < 60 && countdown >= 10
                      ? colors.yellow // yellow warning for < 1 minute left on countdown.
                      : countdown < 10
                      ? colors.red // red warning for less than 10s left on countdown.
                      : colors.pink
                  }`}
                  alpha={0.9}
                  size={100}
                  fontSize="auto"
                  onComplete={() => setCurrentPage("results")}
                />
              </div>
            )}
            <div>
              <Title
                className={styles.questions__title}
                title={`${questionId + 1}. ${
                  quizData[questionId] &&
                  convertToRegularString(quizData[questionId].question)
                }`}
              />
            </div>
            <AnswerGrid
              answers={
                quizData[questionId] &&
                quizData[questionId].answers.map((_) =>
                  convertToRegularString(_)
                )
              }
              selectedAnswerIndex={selectedAnswerIndex}
              setSelectedAnswerIndex={setSelectedAnswerIndex}
            />
            <div className={styles.questions__buttonsContainer}>
              {questionId !== 0 && (
                <LeftArrowIconButton
                  tooltipTitle="Go to previous question"
                  onClick={() => {
                    onClickBackButton();
                  }}
                  iconStyle={{ fontSize: "4vh", color: colors.pink }}
                />
              )}
              <RightArrowIconButton
                tooltipTitle={
                  questionId < quizData.length - 1
                    ? "Go to next question"
                    : "Finish quiz"
                }
                onClick={() => {
                  questionId < quizData.length - 1
                    ? selectedAnswerIndex || selectedAnswerIndex === 0
                      ? onClickNextButton()
                      : toggleAlertPrompt()
                    : selectedAnswerIndex || selectedAnswerIndex === 0
                    ? onClickFinishButton()
                    : toggleAlertPrompt();
                }}
                iconStyle={{ fontSize: "4vh", color: colors.pink }}
              />
              <RestartIconButton
                tooltipTitle="Restart Quiz"
                onClick={() => toggleConfirmationPrompt()}
                iconStyle={{ fontSize: "4vh", color: colors.pink }}
              />
            </div>
            <div className={styles.questions__progressBar}>
              <ProgressBar
                value={questionId + 1}
                total={quizData.length}
                // color="blue"
              />
            </div>
          </div>
        ) : (
          <div className={styles.questions__loadingIndicator}>
            <LoadingIndicator
              size="10vh"
              label={`${
                quizData
                  ? "No Questions Available, please customize quiz and try again."
                  : "Questions Loading"
              }`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              quizData={quizData}
              onRestart={() => restartQuiz()}
            />
          </div>
        )}
      </div>
      <ConfirmationPrompt
        title="Confirmation"
        text="Are you sure you want to restart the quiz?"
        open={confirmationPrompt}
        togglePrompt={toggleConfirmationPrompt}
        onRestart={restartQuiz}
      />
      <AlertPrompt
        title="Error"
        text="Please select an answer before clicking next."
        open={alertPrompt}
        togglePrompt={toggleAlertPrompt}
      />
    </div>
  );
};

export default Questions;
