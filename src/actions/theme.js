import {
  CHANGE_THEME_MODE,
} from "./types";

import { handleDefaultError } from "./base";

export const ChangeThemeMode = (formValues) => (dispatch, getState) => {
  try{
    dispatch({
      type: CHANGE_THEME_MODE,
      payload: formValues,
    });
  } catch (error) {
    handleDefaultError(`Failed to change theme mode:${error}`, dispatch)
  }
};