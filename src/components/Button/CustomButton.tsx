import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

const CustomButton = (props: ButtonProps) => {
  return <Button {...props}>{props.children}</Button>;
};

export default CustomButton;
