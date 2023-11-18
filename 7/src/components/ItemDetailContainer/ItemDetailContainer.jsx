// ItemDetailContainer.jsx
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productsRef = doc(db, "products", id);
        const snapshot = await getDoc(productsRef);

        if (snapshot.exists()) {
          setProducto({
            id: snapshot.id,
            ...snapshot.data(),
          });
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const order = {
    buyer: { name: "Santiago", phone: "3516557298", email: "santyacina@gmail.com" },
    items: [
      {
        categoryid: "pantalones",
        description: "pantalon joggin negro",
        image: "",
        price: 5000,
        stock: 100,
        title: "jogging",
      },
    ],
    total: 5000,
  };

  return (
    <>
      <h3>{producto?.title}</h3>
      <p>{producto?.description}</p>
    </>
  );
};

export default ItemDetailContainer;
