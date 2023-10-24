import CartWidget from '../CarWidget/CartWidget';
import styles from './style.module.css'
import { NavLink } from 'react-router-dom';


const  NavBar = () => {
    const arrayDeCategorias = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing",
    ]




    return(
        <div>
            <h1>Soy el Navbar</h1>
            {arrayDeCategorias.map((cat, index)=> <p key={index} >{cat}</p>)}
            <p>NOMBRE ECOMMERCE</p>
            <CartWidget />
        </div>
    )
}

export default NavBar