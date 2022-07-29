import React from "react";
import NavbarItem from "../NavbarItem/NavbarItem";

const Navbar = () => {
  return (
    <div className="p-4">
      <ul className="navbar  bg-accent p-2 rounded-box w-full h-full">
        <div className="navbar-start">
          <NavbarItem icon="movie" />
        </div>
        <div className="navbar-center menu menu-horizontal">
          <NavbarItem icon="shape" />
          <NavbarItem icon="film" />
          <NavbarItem icon="tv" />
          <NavbarItem icon="bookmark" />
        </div>

        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
