// App.js

import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ShopProvider from '../context/shopContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout'; // Nuevo componente
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <>
          <NavBar />
          <Cart />
          <Routes>
            <Route exact path='/home' element={<ItemListContainer greeting="Hola Bienvenido" />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} /> {/* Nueva ruta para el checkout */}
            <Route path='/order/:orderId' element={<OrderConfirmation />} />
          </Routes>
        </>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;



