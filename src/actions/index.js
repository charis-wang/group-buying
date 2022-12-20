export const clickMenu = (menu) => {
  //Return an action
  return {
    type: 'MENU_OPEN',
    payload: menu
  }
}