import { Autocomplete } from "@mui/material";
import React from "react";
import "../Styles/SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const SearchBar = ({ data, placeholder }) => {
  return (
    <div className="search">
    <div className="searchInput">
  <Autocomplete
    id="custom-input-demo"
    options={data}
    getOptionLabel={(opt) => opt.title}
    renderInput={(params) => (
      <div  ref={params.InputProps.ref} >
        <input
          type="text"
          {...params.inputProps}
          placeholder={placeholder}
          autoFocus="true"
        />
    
 </div>
    )}
  ></Autocomplete>
    <div className="searchIcon">
    <SearchIcon />
  </div>
</div>
</div>
  
  );
};

export default SearchBar;


