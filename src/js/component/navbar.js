import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className=" navbar navbar-light bg-light mb-3">
      <div className="container">
        {" "}
        <Link to="/">
          <span className="navbar-brand mb-0 h1 ">
            <img src="https://img.icons8.com/ios/50/000000/star-wars.png " />
          </span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              > 
                Favorites{" " +store.Favorite.length}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >{
                store.Favorite.length>0 
                ? store.Favorite.map((item,index) => (
                  <li key={index}>
                    
                    <i
                      className="bi bi-trash-fill position-absolute top-40 end-0 "
                      onClick={() => actions.deleteFav(index)}
                    ></i>
                    {item}
                  </li>
                ))
              : "Empty"}</ul>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
