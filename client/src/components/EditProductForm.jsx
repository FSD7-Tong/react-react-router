import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDes] = useState("");

  const navigate = useNavigate();

  const param = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  const handleEdit = (event) => {
    event.preventDefault();
    editProduct();
  };

  const editProduct = async () => {
    try {
      const newData = {
        name: name,
        price: price,
        image: image,
        description: description,
      };
      await axios.put(
        `http://localhost:4001/products/${param.productId}`,
        newData
      );
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  const getProduct = async () => {
    const result = await axios.get(
      `http://localhost:4001/products/${param.productId}`
    );
    setName(result.data.data.name);
    setImage(result.data.data.image);
    setPrice(result.data.data.price);
    setDes(result.data.data.description);
  };

  return (
    <form className="product-form" onSubmit={handleEdit}>
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
            onChange={(event) => {
              setName(event.target.value);
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
            onChange={(event) => {
              setImage(event.target.value);
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
            onChange={(event) => {
              setPrice(event.target.value);
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
            onChange={(event) => {
              setDes(event.target.value);
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
