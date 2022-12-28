import { CREATE_MENU } from "./types"
import menus from "../apis/menus"

export const createMenu = (formValues) => async (dispatch, getState) => {
  //const {userId} = getState().auth
  const response = await menus.post('/', { ...formValues })
  dispatch({ type: CREATE_MENU, payload: response.data })
  //history.push('/')
}