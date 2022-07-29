import React from "react";
import NavbarItem from "../NavbarItem/NavbarItem";

const Navbar = () => {
  return (
    <div className="p-4">
      <ul className="menu menu-horizontal md:menu-vertical bg-accent p-2 rounded-box w-full h-full">
        <NavbarItem />
        <NavbarItem />
      </ul>
    </div>
  );
};

export default Navbar;
