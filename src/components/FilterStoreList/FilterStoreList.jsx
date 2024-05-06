import "./filterStores.scss";
import React, { useState } from "react";
import { categories } from "../../util/data";
import axios from "axios";
import { API_URL } from "../../util/api";

const FilterStoreList = ({ onFilterChange }) => {
  return (
    <>
      <div className="filter-container">
        <div className="filter-container__box">
          {categories.map((category) => (
            <label className="filter-container__label">
              <input
                className="filter-container__input"
                onChange={onFilterChange}
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

export default FilterStoreList;
