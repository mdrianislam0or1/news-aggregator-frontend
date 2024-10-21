// newsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NewsState = {
  search: string;
  category: string;
  source: string;
  sortBy: string; // Add this to handle sorting
};

const initialState: NewsState = {
  search: "",
  category: "",
  source: "",
  sortBy: "latest", // Default to latest
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSource: (state, action: PayloadAction<string>) => {
      state.source = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload; // Add action for sorting
    },
    resetNewsData: () => initialState,
  },
});

export const { setSearch, setCategory, setSource, setSortBy, resetNewsData } = newsSlice.actions;
export default newsSlice.reducer;
