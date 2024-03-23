import React, { useState, useEffect } from "react";
import LoadingIndicator from "../../components/common/LoadingIndicator/LoadingIndicator";
import Title from "../../components/common/Title/Title";
import NumberOfQuestionsField from "../../components/common/inputs/Textfield/Textfield";
import CategoryDropdown from "../../components/common/inputs/Dropdown/Dropdown";
import DifficultyDropdown from "../../components/common/inputs/Dropdown/Dropdown";
import TypeDropdown from "../../components/common/inputs/Dropdown/Dropdown";
import ToggleDuration from "../../components/common/buttons/radioButtons/RadioButtons/RadioButtons";
import DurationInput from "../../components/common/inputs/Textfield/Textfield";
import StartQuizButton from "../../components/common/buttons/Button/Button";
import styles from "./Menu.module.css";
import * as appStyle from "../../App/App.style";
import * as style from "./Menu.style";

const Menu = ({ menuActions, menuState }) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) =>
        setCategories(
          [
            {
              name: "Any Category",
              id: null,
            },
          ].concat(data.trivia_categories)
        )
      );
  }, []);

  return (
    <div>
      <div>
        {categories ? (
          <div className={styles.menu}>
            <div>
              <Title className={styles.menu__title} title="Trivia Quiz" />
            </div>
            <div>
              <NumberOfQuestionsField
                label="Number of questions"
                variant="outlined"
                type="number"
                onChange={menuActions.changeNumberOfQuestions}
                style={style.textFieldStyle}
                inputProps={style.textFieldInputStyle}
                value={menuState.numberOfQuestions}
                helperText="Error: Number must be an integer less than or equal to 50."
                error={!menuState.isNumberOfQuestionsValid}
              />
            </div>
            <div>
              <CategoryDropdown
                options={categories}
                label="Category"
                variant="outlined"
                inputStyle={style.dropdownStyle}
                onChange={menuActions.changeCategory}
                value={menuState.category}
              />
            </div>
            <div>
              <DifficultyDropdown
                options={style.difficulties}
                label="Difficulty"
                variant="outlined"
                inputStyle={style.dropdownStyle}
                onChange={menuActions.changeDifficulty}
                value={menuState.difficulty}
              />
            </div>
            <div>
              <TypeDropdown
                options={style.types}
                label="Question type"
                variant="outlined"
                inputStyle={style.dropdownStyle}
                onChange={menuActions.changeType}
                value={menuState.type}
              />
            </div>
            <div>
              <ToggleDuration
                label="Set time limit?"
                values={["yes", "no"]}
                value={menuState.useDuration}
                onChange={menuActions.changeUseDuration}
                color={style.highlightedPink}
              />
            </div>
            {menuState.useDuration === "yes" && (
              <div>
                <DurationInput
                  label="Time limit (in minutes)"
                  variant="outlined"
                  type="number"
                  onChange={menuActions.changeQuizDuration}
                  style={style.textFieldStyle}
                  value={menuState.quizDuration}
                  helperText="Error: Number must be greater than 0."
                  error={!(menuState.quizDuration > 0)}
                  inputProps={style.textFieldInputStyle}
                />
              </div>
            )}
            <div className={styles.menu__buttonContainer}>
              <StartQuizButton
                label="Start"
                variant="contained"
                onClick={menuActions.startQuiz}
                style={appStyle.buttonStyle}
              />
            </div>
          </div>
        ) : (
          <div>
            <LoadingIndicator
              size="10vh"
              label="Menu Loading"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
