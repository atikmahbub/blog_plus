import { Divider, Stack } from "@mui/material";
import { Fragment, useState } from "react";
import AppBar from "../../components/AppBar";
import BlogCard from "../../components/BlogCard";
import CustomButton from "../../components/Button/CustomButton";
import Dialog from "../../components/Dialog";
import AddBlog from "../../containers/AddBlog";
import { useAppSelector, useAppDispatch } from "../../app/store/hooks";
import { logout } from "../../features/Auth/authSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.authReducer.username);
  const navigate = useNavigate();

  const handleSave = () => {};

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
      >
        <AddBlog />
      </Dialog>
      <AppBar handleLogOut={handleLogOut} title="Blog" user={userName} />
      <Stack p={3} mt={5} display="flex" alignItems="center">
        <CustomButton
          color="primary"
          variant="outlined"
          onClick={() => setOpen(true)}
        >
          Add Blog
        </CustomButton>
        <Stack mt={10} sx={{ width: "100%" }} spacing={2}>
          <BlogCard title="Hello First Blog" details="Hello" id="222" />
          <Divider orientation="horizontal" />
        </Stack>
      </Stack>
    </Fragment>
  );
};

export default Home;
