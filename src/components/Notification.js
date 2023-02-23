import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

export const Notification = () => {
  const { enqueueSnackbar } = useSnackbar();
  const message = useSelector((state) => state.message);

  useEffect(() => {
    if (message.msg !== "") {
      enqueueSnackbar(message.msg, { variant: message.variant });
    }
  });
};
