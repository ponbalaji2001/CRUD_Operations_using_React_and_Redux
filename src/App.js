import './App.css';
import AddProduct from './AddProduct';
import ViewProduct from './ViewProduct';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddProduct />
        <ViewProduct />
      </div>
    </Provider>
    
  );
}

export default App;
