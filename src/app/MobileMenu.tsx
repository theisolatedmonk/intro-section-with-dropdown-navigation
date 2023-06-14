"use client";

import React from 'react'


import Image from "next/image";
import close from "@/images/icon-close-menu.svg";

import { NavItem } from './Dropdown';


type MenuType = {

    class:string
    onCloseClick: () => void;
}

export default function MobileMenu(props:MenuType) {
  return (
    
    <div className={'fixed inset-0 flex items-center justify-end bg-black bg-opacity-60  sm:hidden '}>
        <div className="w-[60%]    h-full bg-gray-100 text-black p-4">
          <div className="w-full flex  justify-end ">
          <button onClick={props.onCloseClick}>
            <Image className=" " src={close} alt={""} />
            </button>
          </div>
          <div className="">
            <NavItem />
          </div>
          <div className="flex  text-black gap-4 items-center flex-col ">
            <p className="p-2">Login</p>
            <button className="border-black border rounded-xl p-2 w-full">
              Register
            </button>
          </div>
        </div>
      </div>
  )
}