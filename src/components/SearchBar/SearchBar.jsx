import React from "react";
import Button from "../Button/Button";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import "./SearchBar.css";
const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <input
        type="search"
        className="search-bar"
        placeholder="Search an album of your choice"
      />
      <Button className="search-icon">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchBar;
