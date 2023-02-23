import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const SubmitDialog = (props) => {
  const [open, setOpen] = useState(false);
  const order = useSelector((state) => state.order);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Submit successfully!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Click continue and go to checkout your shopping list of ${order.initiator}'s group buying `}
            <br />
            <br />
            {`If you would like to edit or delete your order of this group buying,`}
            <br />
            {`please click continue first and keep the process.`}
            <br />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus href={`/order/${order.orderId}`}>
            continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SubmitDialog;
