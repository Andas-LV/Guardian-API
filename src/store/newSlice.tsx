import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsState {
  articles: any[];
  searchQuery: string;
}

const initialState: NewsState = {
  articles: [],
  searchQuery: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setArticles(state, action: PayloadAction<any[]>) {
      state.articles = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setArticles, setSearchQuery } = newsSlice.actions;
export default newsSlice.reducer;