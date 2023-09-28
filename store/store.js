import { configureStore } from 'redux';
import counterReducer from './reducers';

const store = configureStore(counterReducer);

export default store;