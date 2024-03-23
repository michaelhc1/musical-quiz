import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RightArrowIcon from "@material-ui/icons/KeyboardArrowRight";

const RightArrowIconButton = ({
  tooltipTitle,
  color,
  onClick,
  iconStyle,
  buttonStyle,
}) => {
  return (
    <Tooltip title={tooltipTitle}>
      <IconButton style={buttonStyle} color={color} onClick={onClick}>
        <RightArrowIcon style={iconStyle} />
      </IconButton>
    </Tooltip>
  );
};

export default RightArrowIconButton;
