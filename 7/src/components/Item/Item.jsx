// Item.jsx
import React, { useContext } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../../context/shopContext';

const Item = ({ producto }) => {
  const { numero, setNumero } = useContext(ShopContext);

  const sumar = () => {
    setNumero(numero + 1);
  };

  return (
    <div className={styles.card}>
      <h4>{producto.title}</h4>
      <p>USD {producto.price}</p>
      <Link to={`/item/${producto.id}`}>Ver Mas</Link>
    </div>
  );
}

export default Item;
