import styles from './page.module.css'
import { Provider } from 'react-redux';
import store from '../store/store'; // Импортируйте ваш созданный Redux Store

function MyApp() {
  return (
    <Provider store={store}>
      uouo
    </Provider>
  );
}

export default MyApp;
