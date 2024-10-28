import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ViewProductPage() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDes, setProductDes] = useState("");

  const getProducts = async () => {
    try {
      const results = await axios.get(
        `http://localhost:4001/products/${param.productId}`
      );
      setProductName(results.data.data.name);
      setProductPrice(results.data.data.price);
      setProductDes(results.data.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  const param = useParams();

  useEffect(() => {
    getProducts();
  }, []);

  const navigate = useNavigate();

  const clickToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Name: {productName} </h2>
        <p>Price: {productPrice}</p>
        <p>Description: {productDes}</p>
      </div>
      <button onClick={clickToHome}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
