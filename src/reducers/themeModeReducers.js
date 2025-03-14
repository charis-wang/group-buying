import _ from "lodash";
import { CHANGE_THEME_MODE} from "../actions/types";

const initState = {
  themeMode: localStorage.getItem("theme")||"dark",
};

export default function themeModeReducers(state = initState, action) {
  switch (action.type) {
    case CHANGE_THEME_MODE:
      return { ...action.payload };
    default:
      return state;
  }
}