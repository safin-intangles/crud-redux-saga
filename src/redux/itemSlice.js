import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchItems: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    addItem: (state, action) => {
      state.loading = true;
    },
    addSuccess: (state, action) => {
      state.loading = false;
      state.list.push(action.payload);
    },
    updateItem: (state, action) => {
      state.loading = true;
    },
    updateSuccess: (state, action) => {
      state.loading = false;
      state.list = state.list.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deleteItem: (state, action) => {
      state.loading = true;
    },
    deleteSuccess: (state, action) => {
      state.loading = false;
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchItems,
  fetchSuccess,
  addItem,
  addSuccess,
  updateItem,
  updateSuccess,
  deleteItem,
  deleteSuccess,
  setError,
} = itemSlice.actions;

export default itemSlice.reducer;
