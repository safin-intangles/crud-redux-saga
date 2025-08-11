import {
  FETCH_SUCCESS,
  ADD_SUCCESS,
  UPDATE_SUCCESS,
  DELETE_SUCCESS,
} from "./actions";

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { ...state, items: action.payload };

    case ADD_SUCCESS:
      return { ...state, items: [...state.items, action.payload] };

    case UPDATE_SUCCESS:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case DELETE_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
