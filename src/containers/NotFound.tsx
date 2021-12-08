import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const CustomBox = styled(Box)({
  width: "100%",
  height: "100vh",
});

const NotFound = () => {
  return (
    <CustomBox
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h2">Not Found</Typography>
      <Typography variant="body2">
        Go to <Link to="/">Log In</Link>
      </Typography>
    </CustomBox>
  );
};

export default NotFound;
