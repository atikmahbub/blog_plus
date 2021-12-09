import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from "../../components/Button";
import CustomInput from "../../components/Input";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../app/store/hooks";
import { loginSuccess } from "../../features/Auth/authSlice";
import { useNavigate } from "react-router-dom";

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

type FormValues = {
  username: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.username) {
      dispatch(loginSuccess(data));
      navigate("/home");
    }
  };

  return (
    <LoginContainer onSubmit={handleSubmit(onSubmit)}>
      <LoginLayout width={400} padding={5} spacing={4} alignItems="center">
        <Typography gutterBottom variant="h5" color="primary">
          Log In
        </Typography>
        <Controller
          control={control}
          name={"username"}
          rules={{ required: true }}
          render={({ field: { onChange } }) => (
            <CustomInput
              variant="standard"
              color="primary"
              label="User Name"
              fullWidth
              focused
              onChange={onChange}
              helperText={errors.username ? "user name is required" : ""}
            />
          )}
        />
        <Controller
          control={control}
          name={"password"}
          rules={{ required: true }}
          render={({ field: { onChange } }) => (
            <CustomInput
              color="primary"
              variant="standard"
              label="Password"
              type="password"
              fullWidth
              focused
              onChange={onChange}
              helperText={errors.password ? "password is required" : ""}
            />
          )}
        />
        <CustomButton type="submit" color="primary" variant="contained">
          Sign In
        </CustomButton>
      </LoginLayout>
    </LoginContainer>
  );
};

export default Login;
