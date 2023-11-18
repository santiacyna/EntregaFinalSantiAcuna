import styles from '../ItemList/styles.module.css'
import Item from '../Item/Item'

export const ItemList = ({products}) => {
    return (
        <div>
        {products.map((pr, index)=> <Item producto={pr} key={index}/>)}
       </div>
    )
}