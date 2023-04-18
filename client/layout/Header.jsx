import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../images/logo.png';

const Header = () => {

  const navItems = ["Market", "Exchange", "Tutorial", "Wallet", "Login"];
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="w-25" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
           {navItems.map((item, index)=>(<li className="nav-item" key={index}>
              <Link to={`/${item}`} className={`nav-link text-light ${item=="Login"? "mr-3":""}`}>{item}</Link>
            </li>))}
          </ul>
        </div>

      </div>   
      
    </nav>
  );
};

export default Header;
