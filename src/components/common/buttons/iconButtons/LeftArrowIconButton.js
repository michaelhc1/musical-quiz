import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import LeftArrowIcon from "@material-ui/icons/KeyboardArrowLeft";

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
        <LeftArrowIcon style={iconStyle} />
      </IconButton>
    </Tooltip>
  );
};

export default LeftArrowIconButton;
