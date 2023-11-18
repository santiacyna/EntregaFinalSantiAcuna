import React, { useContext } from 'react';
import { ShopContext } from '../../../context/shopContext';

const Cart = () => {
  const { cart } = useContext(ShopContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {/* Verificar si cart está definido antes de mapear */}
      {cart && cart.map((product) => (
        <div key={product.id}>
          <p>{product.title} - ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;


