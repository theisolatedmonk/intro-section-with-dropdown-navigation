"use client"

import React, { useState } from "react";

import Image from "next/image";
import logo from "@/images/logo.svg";
import menu from "@/images/icon-menu.svg";

import { NavItem } from "./Dropdown";
import MobileMenu from "./MobileMenu";
// import NavItem from "./test/page";

type Props = {};

export default function Header() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setIsMobileMenuOpen(true);
    };
  
    const handleCloseClick = () => {
      setIsMobileMenuOpen(false);
    };
  return (
    <div
      className={
        "flex items-center w-full sm:justify-normal justify-between gap-4 bg-gray-600 p-4 "
      }
    >
      <Image className="w-20 h-auto flex " src={logo} alt={""} />
     <button  onClick={handleMenuClick} > <Image className="w-20 h-auto flex sm:hidden" src={menu} alt={""} /></button>
      <div className="sm:flex justify-between w-full hidden">
        {" "}
        <NavItem />
        <div className="flex  text-black gap-4 items-center  ">
          <p className="p-2">Login</p>
          <button className="border-black border rounded-xl p-2 w-full">
            Register
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <MobileMenu onCloseClick={handleCloseClick} class={""} />
      )}    </div>
  );
}
