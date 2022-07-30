import React from "react";
import NavbarItem from "../NavbarItem/NavbarItem";

const Navbar = () => {
  return (
    <div className="p-4 h-screen overflow-hidden">
      <ul className="md:h-full content-center navbar md:flex md:flex-col md:space-between items-center justify-between bg-accent p-2 rounded-box ">
        <div className="navbar-start md:flex md:flex-col space-y-8">
          <NavbarItem icon="movie" />
          <div className="navbar-center hidden md:inline-flex menu menu-horizontal md:menu-vertical">
            <NavbarItem icon="shape" />
            <NavbarItem icon="film" />
            <NavbarItem icon="tv" />
            <NavbarItem icon="bookmark" />
          </div>
        </div>


        <div className="md:hidden navbar-center menu menu-horizontal md:menu-vertical">
          <NavbarItem icon="shape" />
          <NavbarItem icon="film" />
          <NavbarItem icon="tv" />
          <NavbarItem icon="bookmark" />
        </div>
        <div className="navbar-end md:flex md:flex-col ">
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
