import { Provider } from 'react-redux';
import store from './redux/store';
import HomeScene from './scenes/HomeScene';

function App() {
  return (
    <Provider store={store}>
      <HomeScene />
    </Provider>
  );
}

export default App;
