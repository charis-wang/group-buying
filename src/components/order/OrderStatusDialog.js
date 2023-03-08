import { React, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const statusInfos = {
  unpaid: {
    color: "red",
    bgcolor: "pink",
    icon: <ClearIcon />,
    instruction: "You've made an order but haven't paid yet.",
  },
  paid: {
    color: "blue",
    bgcolor: "lightblue",
    icon: <ErrorOutlineIcon />,
    instruction: "You've paid for the order to initiator.",
  },
  confirmed: {
    color: "green",
    bgcolor: "lightgreen",
    icon: <CheckIcon />,
    instruction:
      "Initiator has received your payment and delivered your order.",
  },
};

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const username = useSelector((state) => state.account.username);
  const initiator = useSelector((state) => state.order.initiator);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} sx={{ width: "100%" }}>
      <DialogTitle>
        Let buyer and initiator set status for your order.{" "}
      </DialogTitle>
      <List sx={{ pt: 0 }}>
        {Object.keys(statusInfos).map((status) => (
          <ListItem disableGutters key={status}>
            <ListItemButton
              onClick={() => handleListItemClick(status)}
              disabled={status === "confirmed" && username !== initiator}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: "transparent",
                    color: statusInfos[status].color,
                  }}
                >
                  {statusInfos[status].icon}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={status}
                secondary={statusInfos[status].instruction}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const OrderStatusDialog = (props) => {
  const { display, onSubmit, rejection } = props;

  const [open, setOpen] = useState(false);

  const orderStatus = useSelector((state) => state.order.status);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    onSubmit(value);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        sx={{ color: statusInfos[display].color, textTransform: "none" }}
        disabled={orderStatus !== "Processing" || rejection}
      >
        {display}
      </Button>
      <SimpleDialog selectedValue={display} open={open} onClose={handleClose} />
    </div>
  );
};

export default OrderStatusDialog;
