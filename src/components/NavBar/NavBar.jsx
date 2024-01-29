// import { Logo, Modals, Search1, SearchBar } from '../../components';
import React from 'react';
import { Logo, Modals, SearchBar } from '../../components';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ data }) => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <Logo />
        </Link>
         <SearchBar data={data} className="searchbar" /> 
       

        <Modals title={'Give Feedback'} />
      </nav>
     
      <SearchBar data={data} className="searchbar-moblie" />
    </>
  );
};

export default NavBar;
