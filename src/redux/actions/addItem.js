import { ADD_ITEM } from "./actionTypes";
let previousId = 0;
function* idMaker() {
  let index = 0;
  while (true) yield index++;
}
const generator = idMaker();
export const getNewId = () => generator.next().value;

export const addItem = name => {
  const id = previousId + 1;
  const newItem = {
    id: getNewId(),
    name: name,
    done: false
  };

  return {
    type: ADD_ITEM,
    payload: newItem
  };
};
