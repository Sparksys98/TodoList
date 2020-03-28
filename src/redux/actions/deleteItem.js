import { DELETE_ITEM } from "./actionTypes";
export const deleteItem = list => {
  return {
    type: DELETE_ITEM,
    payload: list
  };
};
