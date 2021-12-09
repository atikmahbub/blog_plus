import { Stack } from "@mui/material";
import { Fragment, useState } from "react";
import AppBar from "../../components/AppBar";
import CustomButton from "../../components/Button/CustomButton";
import Dialog from "../../components/Dialog";
import { useAppSelector, useAppDispatch } from "../../app/store/hooks";
import { logout } from "../../features/Auth/authSlice";
import { useNavigate } from "react-router-dom";
import { addBlog } from "../../features/Blog/blogSlice";
import { v4 as uuidv4 } from "uuid";
import { FormValues } from "../../components/Dialog/Modal";
import BlogContainer from "./BlogContainer";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userName, blogs } = useAppSelector((state) => ({
    userName: state.auth.username,
    blogs: state.blog,
  }));
  const [open, setOpen] = useState(false);

  const handleSave = (
    e: React.MouseEvent<HTMLButtonElement>,
    value: FormValues
  ) => {
    e.preventDefault();
    if (value.title && value.details) {
      value["id"] = uuidv4();
      dispatch(addBlog(value));
      setOpen(false);
    }
  };

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Fragment>
      <Dialog
        header="Add Blog"
        open={open}
        handleSave={handleSave}
        handleClose={() => setOpen(false)}
      />
      <AppBar handleLogOut={handleLogOut} title="Blog" user={userName} />
      <Stack p={3} mt={5} display="flex" alignItems="center">
        <CustomButton
          color="primary"
          variant="outlined"
          onClick={() => setOpen(!open)}
          sx={{ marginBottom: 10 }}
        >
          Add Blog
        </CustomButton>
        <BlogContainer blogs={blogs} />
      </Stack>
    </Fragment>
  );
};

export default Home;
