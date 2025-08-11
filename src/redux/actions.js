// Action Types
export const FETCH_ITEMS = "FETCH_ITEMS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const ADD_ITEM = "ADD_ITEM";
export const ADD_SUCCESS = "ADD_SUCCESS";

export const UPDATE_ITEM = "UPDATE_ITEM";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";

export const DELETE_ITEM = "DELETE_ITEM";
export const DELETE_SUCCESS = "DELETE_SUCCESS";

// Action Creators
export const fetchItems = () => ({ type: FETCH_ITEMS });
export const addItem = (item) => ({ type: ADD_ITEM, payload: item });
export const updateItem = (id, item) => ({
  type: UPDATE_ITEM,
  payload: { id, item },
});
export const deleteItem = (id) => ({ type: DELETE_ITEM, payload: id });
