// NavBar.jsx
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const arrayDeCategorias = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className={styles.navbar}>
      <h1>NOMBRE ECOMMERCE</h1>
      <div className={styles.categories}>
        {arrayDeCategorias.map((cat, index) => (
          <NavLink key={index} to={`/category/${cat}`} activeClassName={styles.active}>
            {cat}
          </NavLink>
        ))}
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;
