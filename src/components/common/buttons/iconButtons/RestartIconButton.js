import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RestartIcon from "@material-ui/icons/Refresh";

const LeftArrowIconButton = ({
  tooltipTitle,
  color,
  onClick,
  iconStyle,
  buttonStyle,
}) => {
  return (
    <Tooltip title={tooltipTitle}>
      <IconButton style={buttonStyle} color={color} onClick={onClick}>
        <RestartIcon style={iconStyle} />
      </IconButton>
    </Tooltip>
  );
};

export default LeftArrowIconButton;
