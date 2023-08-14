import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default (props) => {
  return (
    <Menu>
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/about">
        About
      </Link>
      <Link className="menu-item" to="/products">
        Products
      </Link>
      <Link className="menu-item" to="/blog">
        Blog
      </Link>
      <Link className="menu-item" to="/gallary">
        Gallery
      </Link>
      <Link to="/contectus" className="menu-item">
        Contact Us
      </Link>
    </Menu>
  );
};
