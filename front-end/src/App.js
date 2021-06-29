import { Provider } from 'react-redux';
import store from './redux/store';
import Posts from './components/posts';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>teste</h1>
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
