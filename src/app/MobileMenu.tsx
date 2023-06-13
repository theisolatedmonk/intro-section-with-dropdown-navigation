"use client";

import React from 'react'


import Image from "next/image";
import logo from "@/images/logo.svg";
import arrowUp from "@/images/icon-arrow-up.svg";
import arrowDown from "@/images/icon-arrow-down.svg";
import audiophile from "@/images/client-audiophile.svg";
import databiz from "@/images/client-databiz.svg";
import maker from "@/images/client-maker.svg";
import meet from "@/images/client-meet.svg";
import calendar from "@/images/icon-calendar.svg";
import close from "@/images/icon-close-menu.svg";
import menu from "@/images/icon-menu.svg";
import planning from "@/images/icon-planning.svg";
import reminders from "@/images/icon-reminders.svg";
import todo from "@/images/icon-todo.svg";
import heroDesktop from "@/images/image-hero-desktop.png";
import heroMobile from "@/images/image-hero-mobile.png";
import { NavItem } from './Dropdown';


type MenuType = {

    class:string
    onCloseClick: () => void;
}

export default function MobileMenu(props:MenuType) {
  return (
    
    <div className={'fixed inset-0 flex items-center justify-end bg-black bg-opacity-60   '}>
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