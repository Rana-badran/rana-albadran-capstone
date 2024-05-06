import "./addStore.scss";
import { categories } from "../../util/data";
import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { API_URL } from "../../util/api";
import { useNavigate } from "react-router-dom";

const AddStore = () => {
  const navigate = useNavigate();
  const dropDownRef = useRef();
  const [newStoreName, setNewStoreName] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newMedia, setNewMedia] = useState("");
  const [newCategories, setNewCategories] = useState([]);

  function handleSelectChnage(e) {
    if (!newCategories.includes(e.target.value)) {
      setNewCategories([...newCategories, e.target.value]);
    }

    // keep what's there and add a selected one through e.target.value
    dropDownRef.current.value = "";
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const storeObject = {
      name: newStoreName,
      address: newAddress,
      media: newMedia,
      categories: JSON.stringify(newCategories),
    };

    try {
      await axios.post(`${API_URL}/stores`, storeObject);
      console.log("store added");
      navigate("/stores");
    } catch (error) {
      console.log("Couldn't add a store", error);
    }
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Add a New Store</h2>
      <div>
        <label>Name of the new store you found</label>
        <input
          placeholder="Store Name"
          value={newStoreName}
          onChange={(e) => setNewStoreName(e.target.value)}></input>
      </div>
      <div>
        <label>Address</label>
        <input
          placeholder=" Full Street Address"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}></input>
      </div>
      <div>
        <label>Add any store site or social media link </label>
        <input
          placeholder="add link"
          value={newMedia}
          onChange={(e) => setNewMedia(e.target.value)}></input>
      </div>
      <div>
        <label>Please check off categories of items this store sells </label>
        <select ref={dropDownRef} onChange={handleSelectChnage}>
          <option value="">Choose a Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div>
          {newCategories.map((selected) => (
            <span style={{ marginRight: "1rem" }} key={selected}>
              {selected}
            </span>
          ))}
        </div>
      </div>
      <div>
        <button
          onClick={() => navigate("/stores")}
          type="button"
          label="Cancel">
          Cancel
        </button>
        <button type="submit" label="Add Store">
          Add Store
        </button>
      </div>
    </form>
  );
};

export default AddStore;
