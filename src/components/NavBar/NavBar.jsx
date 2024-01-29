import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import headphones from "../../assets/headphones.png";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
const NavBar = () => {
  return (
    <nav className="navBar">
      <Logo />
      <SearchBar />
      <Button
        text="Give Feedback"
        className="feedBack-button feedBack-text"
        variant="contained"
      />
    </nav>
  );
};

export default NavBar;
