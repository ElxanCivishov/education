import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  name: string;
}

interface DataState {
  items: Item[];
}

const initialState: DataState = {
  items: [],
};

const educationSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // ... other actions if needed
  },
});

export const { addItem, removeItem } = educationSlice.actions;

export default educationSlice.reducer;
