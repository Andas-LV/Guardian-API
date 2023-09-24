import { combineReducers } from '@reduxjs/toolkit';
import newsReducer from './newSlice';

const rootReducer = combineReducers({
  // Добавьте здесь другие срезы, если они есть
  news: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

