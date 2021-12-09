import { Divider, Stack } from "@mui/material";
import { Fragment, useState } from "react";
import AppBar from "../../components/AppBar";
import BlogCard from "../../components/BlogCard";
import CustomButton from "../../components/Button/CustomButton";
import Dialog from "../../components/Dialog";
import { useAppSelector, useAppDispatch } from "../../app/store/hooks";
import { logout } from "../../features/Auth/authSlice";
import { useNavigate } from "react-router-dom";
import { addBlog } from "../../features/Blog/blogSlice";
import { v4 as uuidv4 } from "uuid";
import { FormValues } from "../../components/Dialog/Modal";

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
        {blogs
          .slice(0)
          .reverse()
          .map((item: any, i: number) => (
            <Stack key={i} mt={3} sx={{ width: "100%" }} spacing={3}>
              <BlogCard
                title={item.title}
                details={item.details}
                id={item.id}
              />
              <Divider orientation="horizontal" />
            </Stack>
          ))}
      </Stack>
    </Fragment>
  );
};

export default Home;
