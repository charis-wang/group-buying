import { errorMsg } from "./message";

export const handleDefaultError = (error, dispatch) => {
  const status = error.response.status;

  if ([401, 422].indexOf(status) !== -1) {
    errorMsg(error.response.data.message)(dispatch);
    return;
  }

  throw error;
};
