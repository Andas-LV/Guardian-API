import { Provider } from 'react-redux';
import store from './store/store'; // Импортируйте ваш созданный Redux Store

function MyApp() {
  return (
    <Provider store={store}>
      ааа
    </Provider>
  );
}

export default MyApp;