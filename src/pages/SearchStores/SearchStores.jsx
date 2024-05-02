import "./searchStores.scss";
import StoreItemModal from "../../components/StoreItemModal/StoreItemModal";
import FilterStoreList from "../../components/FilterStoreList/FilterStoreList";
import StoreList from "../../components/StoreList/StoreList";
import { API_URL } from "../../util/api";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../../styles/bootstrap.min.css";

const SearchStores = () => {
  const [storesArray, setStoresArray] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleClose = () => setModalOpen(false);
  const handleShow = (storeInput) => {
    setModalOpen(true);
    setSelectedStore(storeInput);
  };

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const reqStoreData = await axios.get(`${API_URL}/stores`);
        const storeData = reqStoreData.data;

        setStoresArray(storeData);
      } catch (error) {
        console.log("can't get store list", error);
      }
    };
    const fetchFilteredStores = async () => {
      try {
        const reqFilterData = await axios.get(
          `${API_URL}/stores/filter?categories=${selectedCategories.join()}`
        );
        const filterData = reqFilterData.data;
        console.log(filterData);
        setStoresArray(filterData);
      } catch (error) {
        console.log("can't get stores", error);
      }
    };
    if (selectedCategories.length === 0) {
      fetchStores();
    } else {
      fetchFilteredStores();
    }
  }, [selectedCategories.length]);

  const handleFilterChanged = (e) => {
    // check if the target is checked or unchecked
    // if it's checked add the value to selectedCategories else remove it from selectedCategories
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, e.target.value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => {
          return category !== e.target.value;
        })
      );
    }
  };
  return (
    <>
      <div>
        <Link to="/add"> Add a new store</Link>
      </div>
      <div>
        <StoreList onOpenClick={handleShow} data={storesArray} />
        {selectedStore && (
          <StoreItemModal
            onCloseClick={handleClose}
            modal={modalOpen}
            selected={selectedStore}
          />
        )}
      </div>
      <div>
        <FilterStoreList onFilterChange={handleFilterChanged} />
      </div>
    </>
  );
};

export default SearchStores;
