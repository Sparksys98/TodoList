import { DONE_CHECK } from "./actionTypes";
export const doneCheck = list => {
  return {
    type: DONE_CHECK,
    payload: list
  };
};
