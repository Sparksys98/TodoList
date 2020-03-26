import { DONE_CHECK } from "../actions/actionTypes";

const initialState = {
  list: [
    {
      id: 1,
      name: "Play Video Games",
      done: false
    },
    {
      id: 2,
      name: "Study Redux",
      done: false
    },
    {
      id: 3,
      name: "Weird Checkbox",
      done: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DONE_CHECK:
      const list = action.payload;
      list.done = !list.done;
      console.log(list);
      return {
        ...state,
        list: [...state.list]
      };
    default:
      return state;
  }
};

export default reducer;
