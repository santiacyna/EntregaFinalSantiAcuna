// OrderConfirmation.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const OrderConfirmation = () => {
  const { orderId } = useParams();

  return (
    <div>
      <h2>Orden Confirmada</h2>
      <p>¡Gracias por tu compra! Tu número de orden es: {orderId}</p>
    </div>
  );
};

export default OrderConfirmation;
