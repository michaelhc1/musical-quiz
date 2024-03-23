import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as colors from "../../../App/standard-colors";

const ConfirmationModalComponent = ({
  title,
  text,
  open,
  togglePrompt,
  onRestart,
}) => {
  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
        {text && (
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {text}
            </DialogContentText>
          </DialogContent>
        )}
        <DialogActions style={{ justifyContent: "center" }}>
          <Button
            onClick={togglePrompt}
            // color="primary"
            style={{ fontWeight: "bold", color: colors.pink }}
          >
            Cancel
          </Button>
          <Button
            onClick={onRestart}
            // color="primary"
            autoFocus
            style={{ fontWeight: "bold", color: colors.pink }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationModalComponent;
