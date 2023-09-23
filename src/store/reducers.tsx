import { combineReducers } from 'redux';
import newsReducer from './newSlice';

const rootReducer = combineReducers({
  news: newsReducer,
  // Добавьте другие срезы, если они будут в вашем приложении
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;