import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CustomButton from "../Button";

type DialogProps = {
  open: boolean;
  handleClose: () => void;
  header: string;
  children?: React.ReactNode;
  handleSave: () => void;
};

export default function Modal({
  open,
  handleClose,
  header,
  children,
  handleSave,
}: DialogProps) {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>{header}</DialogTitle>
      <DialogContent>{children}</DialogContent>
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
          onClick={handleClose}
        >
          Save Blog
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
}
