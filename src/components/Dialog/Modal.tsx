import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CustomButton from "../Button";
import { Stack } from "@mui/material";
import CustomInput from "../../components/Input";

export type FormValues = {
  id?: string;
  title: string;
  details: string;
};

type DialogProps = {
  open: boolean;
  handleClose: () => void;
  header: string;
  handleSave: (
    event: React.MouseEvent<HTMLButtonElement>,
    value: FormValues
  ) => void;
};

export default function Modal({
  open,
  handleClose,
  header,
  handleSave,
}: DialogProps) {
  const [state, setState] = React.useState({
    title: "",
    details: "",
  });
  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>{header}</DialogTitle>
      <DialogContent>
        <Stack spacing={3} mt={2}>
          <CustomInput
            fullWidth
            variant="filled"
            color="primary"
            label="Blog Title"
            focused
            required
            onChange={(e) => setState({ ...state, title: e.target.value })}
          />
          <CustomInput
            fullWidth
            variant="filled"
            label="Blog Description"
            color="primary"
            multiline
            focused
            minRows={10}
            onChange={(e) => setState({ ...state, details: e.target.value })}
          />
        </Stack>
      </DialogContent>
      <DialogActions sx={{ paddingRight: 3, paddingBottom: 2 }}>
        <CustomButton
          variant="outlined"
          color="error"
          size="small"
          onClick={handleClose}
        >
          Close
        </CustomButton>
        <CustomButton
          variant="contained"
          size="small"
          color="primary"
          onClick={(e) => handleSave(e, state)}
        >
          Save Blog
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
}
