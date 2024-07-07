import './App.css';
import * as React from 'react';
import { useState, useCallback } from 'react';
import ManageProduct from './ManageProduct';
import DisplayProducts from './DisplayProducts';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [productId, setProductId] = useState('');
  const [option, setOption] = useState('');

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
    handleProductId('');
    handleProductOption('');
  };

  const handleProductOption = useCallback((op) => {
    setOption(op);
  },[]);

  const handleProductId = useCallback((id) => {
    setProductId(id);
  },[]);
  

  return (
    <Provider store={store} style={{ width: '100%', height: '100vh' }}>
      <div className="App">
        <ManageProduct open={isDrawerOpen} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} option={option} 
          handleProductOption={handleProductOption} handleProductId={handleProductId} productId={productId} />
        <DisplayProducts open={isDrawerOpen} productId={productId} handleProductId={handleProductId} />
      </div>
    </Provider>
    
  );
}

export default App;
