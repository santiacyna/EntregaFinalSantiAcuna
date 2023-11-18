import { useEffect, useState } from "react"
import Item from "../Item/Item"
import { db } from "../../firebase/client"
import styles from './styles.module.css'
import { addDoc, collection, doc, getDoc, getDocs, limit, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])
    const {id} = useParams('')
    const order = {
        buyer: {name:"Santiago", phone:"3516557298", email: "santyacina@gmail.com"},
        items: [
                {
                categoryid: "pantalones",
                description: "pantalon joggin negro",
                image: "",
                price: 5000,
                stock: 100,
                title: "jogging",
            }
        ],
        total: 5000
    }

    const crearOrdenDeCompra =() => {
        const refOrder = collection (db,"orders")

        addDoc(refOrder, order).then(({id}) => console.log(id))
    }


   useEffect(()=> {
    const productsRef = id ? query(
        collection(db,"products"),
        where("categoryId", "==", id),
    )
    :
    collection(db,"products")


    getDocs(productsRef)
    .then((snapshot) => {
        setProducts(snapshot.docs.map(doc => ({
        id: doc.id, ...doc.data()})))
    })
    .catch(e => console.error(e))
},[])



    return(
        <>
       <div className={styles.container}>
        <ItemList products={products}></ItemList>
       </div>
       <div>
        <button onClick={crearOrdenDeCompra}>Crear Orden</button>
       </div>
       </>
    )


}

export default ItemListContainer