import "./searchStores.scss";
import StoreItemModal from "../../components/StoreItemModal/StoreItemModal";
import StoreList from "../../components/StoreList/StoreList";
import FilterStores from "../../components/FilterStores/FilterStores";
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
    fetchStores();
  }, []);
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
        <FilterStores />
      </div>
    </>
  );
};

export default SearchStores;
