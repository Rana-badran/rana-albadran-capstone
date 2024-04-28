import { Link } from "react-router-dom";
import SearchStores from "../../pages/SearchStores/SearchStores";
import "./storeList.scss";
import { API_URL } from "../../util/api";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const StoreList = () => {
  const [storeList, setStoreList] = useState([]);
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const reqStoreData = await axios.get(`${API_URL}/stores`);
        const storeData = reqStoreData.data;
        setStoreList(storeData);
      } catch (error) {
        console.log("can't get store list", error);
      }
    };
    fetchStores();
  }, []);

  return (
    <div>
      <h2>Store List</h2>
      <ul>
        {storeList.map((store, index) => (
          <li key={index}>{store.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StoreList;
