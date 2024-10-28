import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EditProductForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const param = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    editProduct();
  };

  const getProduct = async () => {
    const response = await axios.get(
      `http://localhost:4001/products/${param.productId}`
    );
    setName(response.data.data.name);
    setImage(response.data.data.image);
    setPrice(response.data.data.price);
    setDescription(response.data.data.description);
  };

  const editProduct = async () => {
    try {
      const newProduct = {
        name: name,
        price: price,
        image: image,
        description: description,
      };
      await axios.put(
        `http://localhost:4001/products/${param.productId}`,
        newProduct
      );
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
