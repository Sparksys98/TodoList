import {
  DONE_CHECK,
  DELETE_ALL,
  DELETE_ITEM,
  ADD_ITEM
} from "../actions/actionTypes";

const initialState = {
  list: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DONE_CHECK:
      const list = action.payload;
      list.done = !list.done;
      return {
        ...state,
        list: [...state.list]
      };
    case DELETE_ALL: {
      return {
        ...state,

        list: state.list.filter(list => list.done === false)
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,

        list: state.list.filter(list => list !== action.payload)
      };
    }
    case ADD_ITEM: {
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    }
    default:
      return state;
  }
};

export default reducer;
