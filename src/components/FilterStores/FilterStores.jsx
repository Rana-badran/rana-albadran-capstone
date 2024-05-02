import "./filterStores.scss";
import React, { useState } from "react";
import { categories } from "../../util/data";
import axios from "axios";
import { API_URL } from "../../util/api";

const FilterStores = () => {
  const handleFilterClick = async (e) => {
    try {
      const reqFilterData = await axios.get(
        `${API_URL}/stores/filter?categories=${e.target.value}`
      );
      const filterData = reqFilterData.data;
      console.log(filterData);
    } catch (error) {
      console.log("can't get stores", error);
    }
  };

  return (
    <>
      <div>
        <div>
          {categories.map((category) => (
            <label>
              <input
                onClick={handleFilterClick}
                type="checkbox"
                value={category}
              />{" "}
              {category}
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterStores;
