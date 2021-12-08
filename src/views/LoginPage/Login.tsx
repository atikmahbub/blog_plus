import React from "react";
import { Stack, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import CustomButton from "../../components/Button";
import CustomInput from "../../components/Input";

const LoginContainer = styled("form")({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const LoginLayout = styled(Stack)({
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
});

const Login = () => {
  return (
    <LoginContainer>
      <LoginLayout width={400} padding={5} spacing={4} alignItems="center">
        <Typography gutterBottom variant="h5" color="primary">
          Log In
        </Typography>
        <CustomInput
          variant="standard"
          color="primary"
          label="User Name"
          fullWidth
          focused
        />
        <CustomInput
          color="primary"
          variant="standard"
          label="Password"
          fullWidth
          focused
        />
        <CustomButton color="primary" variant="contained">
          Sign In
        </CustomButton>
      </LoginLayout>
    </LoginContainer>
  );
};

export default Login;
