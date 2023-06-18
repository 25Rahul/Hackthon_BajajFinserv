import React from 'react';
import "./Header.css";
import { Link } from " react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from '@material-ui/icons';

function Header() {
  return (
    <nav className="header">
     <Link to="/">
     <img  className="header_logo" src="https://static.vecteezy.com/system/resources/previews/019/040/342/original/amazon-logo-editorial-free-vector.jpg"alt=""/>
     </Link>
     <div className='header_search'>
     <input type =" text" className="header_searchInput" />
     <SearchIcon className="header_searchIcon" />
     </div>
     <div className='header_nav'>
      <Link to="/login" className="header_link">
        <div className='header_option'>
          <span className='header_optionLineOne'>Hello Rahul</span>
          <span className='header_optionLineTwo'>Sign In</span>
        </div>
      </Link>
      <Link to="/" className="header_link">
        <div className='header_option'>
          <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>
        </div>
      </Link>
      <Link to="/" className="header_link">
        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>
      </Link>
    

      <Link to="/checkout" >
        <div className="header_optionBasket">
          <ShoppingBasket/>
        <span className='header_optionLineTwo header_basketCount'>0</span>
        </div>
      </Link>

    </div>
    </nav>
  );
} 

export default Header;
