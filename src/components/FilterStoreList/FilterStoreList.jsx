import "./filterStores.scss";
import React, { useState } from "react";
import { categories } from "../../util/data";
import axios from "axios";
import { API_URL } from "../../util/api";

const FilterStoreList = ({ onFilterChange }) => {
  return (
    <>
      <div>
        <div>
          {categories.map((category) => (
            <label>
              <input
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
