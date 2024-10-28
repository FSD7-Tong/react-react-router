import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ViewProductPage() {
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();
  const param = useParams();

  const getProducts = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4001/products/${param.productId}`
      );
      setProduct(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>View Product Page</h1>
      {product && (
        <div className="view-product-container">
          <h2>Product Title : {product.name}</h2>
          <p>Content</p>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <img src={product.img} alt={product.name} width="250" />
        </div>
      )}
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
