import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../redux/productSlice";

const Products = () => {
  const products = useSelector((state) => state.products);
  const [proName, setProName] = useState("");
  const dispatch = useDispatch();

  const onProductAdd = () => {
    dispatch(
      addProduct({
        id: products.length + 1,
        name: proName,
      })
    );
    setProName("");
  };

  const onDeleteProduct = (id) => {
    dispatch(
      removeProduct({
        id: id,
      })
    );
  };

  return (
    <div>
      <p>This are my products</p>
      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.id} {product.name}
          </p>
          <button onClick={() => onDeleteProduct(product.id)}>
            Delete this product
          </button>
        </div>
      ))}
      <input value={proName} onChange={(e) => setProName(e.target.value)} />
      <button onClick={onProductAdd}>Add product</button>
    </div>
  );
};

export default Products;
