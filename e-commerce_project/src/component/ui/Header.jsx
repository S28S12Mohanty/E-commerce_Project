import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  // navigation path
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Mall", path: "/mall" },
    { name: "Categories", path: "/categories" },
    { name: "Account", path: "/account" },
  ];

  return (
    <header className="bg-blue-400 text-gray-100">
      <div className="max-w-8/10 m-auto">
        <div className="grid grid-cols-3 items-center py-4">
          {/* logo and name */}
          <NavLink className="flex items-center ">
            <LiaShoppingBagSolid className="text-4xl " />
            <h1 className="text-3xl font-bold "> E-commerce</h1>
          </NavLink>

          {/* navigation link */}
          <nav className="font-semibold">
            <ul className="flex gap-10 justify-center  ">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path} className="hover:opacity-95">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* login and cart */}
          <div className="flex gap-5 justify-end text-3xl text-blue-900 hover:text-gray-100">
            <CiSearch />
            <NavLink to="/login">
              <CiLogin />
            </NavLink>
            <NavLink to="/cart">
              <GiShoppingCart />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
