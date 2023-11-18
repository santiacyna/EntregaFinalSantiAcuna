import React, { useState, useContext } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/client';
import { ShopContext } from '../../../context/shopContext';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, total }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const navigate = useNavigate();
  const { clearCart } = useContext(ShopContext);

  const handleCheckout = async () => {
    try {
      // Validar que todos los campos estén llenos
      if (!firstName || !lastName || !phone || !email || !confirmEmail) {
        alert('Por favor, complete todos los campos.');
        return;
      }

      // Validar que los correos electrónicos coincidan
      if (email !== confirmEmail) {
        alert('Los correos electrónicos no coinciden.');
        return;
      }

      // Calcular el total de la orden
      const orderTotal = cartItems
      ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
      : 0;

      const orderItems = cartItems && cartItems.length > 0 ? cartItems : [];



      // Crear un objeto de orden
      const order = {
        buyer: { firstName, lastName, phone, email },
        items: cartItems,
        total: orderTotal,
        createdAt: serverTimestamp(), // Marca de tiempo del servidor
      };

      // Agregar la orden a la colección "orders" en Firestore
      const docRef = await addDoc(collection(db, 'orders'), order);

      // Después de procesar la orden con éxito, limpiar el carrito
      clearCart();

      // Navegar a la página de confirmación con el ID de la orden
      navigate(`/order/${docRef.id}`);
    } catch (error) {
      console.error('Error al enviar la orden:', error.message);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Confirm Email:
          <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleCheckout}>
          Procesar Orden
        </button>
      </form>
    </div>
  );
};
export default Checkout;