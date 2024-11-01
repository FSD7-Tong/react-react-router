import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleCreate = (event) => {
    event.preventDefault();
    createProduct();
  };

  const createProduct = async () => {
    try {
      const data = {
        name: name,
        price: parseFloat(price),
        image: image,
        description: description,
      };
      await axios.post("http://localhost:4001/products", data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleCreate}>
      <h1>Create Product Form</h1>
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
              setDescription(event.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
