import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import RestartButton from "../../common/buttons/Button/Button";
import * as colors from "../../../App/standard-colors";
import * as appStyle from "../../../App/App.style";

const LoadingIndicator = ({
  size,
  style,
  label,
  onRestart,
  quizData,
  titleClassName,
}) => {
  const useStyles = makeStyles((theme) => ({
    root: style,
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={titleClassName}>{label}</h1>
      {!quizData ? (
        <CircularProgress size={size} style={{ color: colors.pink }} />
      ) : (
        <RestartButton
          label="RESTART"
          variant="contained"
          color="primary"
          onClick={onRestart}
          style={appStyle.buttonStyle}
        />
      )}
    </div>
  );
};

export default LoadingIndicator;
