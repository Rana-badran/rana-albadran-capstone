import "./addStore.scss";
import Header from "../../components/Header/Header";
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
  const [newlong, setNewlong] = useState("");
  const [newlat, setNewlat] = useState("");
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
      latitude: newlat,
      longitude: newlong,
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
    <>
      {/* <header>
        <Header />
      </header> */}
      <form className="form-container" onSubmit={handleFormSubmit}>
        <h2 className="form-container__title">Add a New Store</h2>
        <div>
          <label className="form-container__label">
            Name of the new store you found
          </label>
          <input
            className="form-container__input"
            placeholder="Store Name"
            value={newStoreName}
            onChange={(e) => setNewStoreName(e.target.value)}></input>
        </div>
        <div>
          <label className="form-container__label">Address</label>
          <input
            className="form-container__input"
            placeholder=" Full Street Address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}></input>
        </div>
        <div>
          <label className="form-container__label">Latitude</label>
          <input
            className="form-container__input"
            placeholder=" Latitude"
            value={newlat}
            onChange={(e) => setNewlat(e.target.value)}></input>
        </div>
        <div>
          <label className="form-container__label">Longitude</label>
          <input
            className="form-container__input"
            placeholder=" Longitude"
            value={newlong}
            onChange={(e) => setNewlong(e.target.value)}></input>
        </div>
        <div>
          <label className="form-container__label">
            Add any store site or social media link{" "}
          </label>
          <input
            className="form-container__input"
            placeholder="Add link"
            value={newMedia}
            onChange={(e) => setNewMedia(e.target.value)}></input>
        </div>
        <div>
          <label className="form-container__label">
            Select categories of items this store sells{" "}
          </label>
          <select
            className="form-container__input"
            ref={dropDownRef}
            onChange={handleSelectChnage}>
            <option className="form-container__option" value="">
              Choose a Category
            </option>
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
        <div className="form-container__button-box">
          <button
            className="form-container__button"
            onClick={() => navigate("/stores")}
            type="button"
            label="Cancel">
            Cancel
          </button>
          <button
            className="form-container__button"
            type="submit"
            label="Add Store">
            Add Store
          </button>
        </div>
      </form>
    </>
  );
};

export default AddStore;
