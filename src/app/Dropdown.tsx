import React from "react";
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
import { markAsUntransferable } from "worker_threads";

export function FeaturesDropdown() {
  return (
    <div className="flex flex-col text-black rounded-lg p-4 gap-2 sm:shadow-lg  ">
        <div className="flex  items-center gap-2 ">
          <Image src={todo} alt={"Todo List"} />
          <p>Todo List</p>{" "}
        </div>

        <div className="flex  items-center gap-2">
          <Image src={calendar} alt={"Calendar"} />
          <p>Calendar</p>{" "}
        </div>
        <div className="flex  items-center gap-2">
          <Image src={reminders} alt={"Reminders"} />
          <p>Reminders</p>{" "}
        </div>
        <div className="flex  items-center gap-2">
          <Image src={planning} alt={"Planning"} />
          <p>Planning</p>{" "}
        </div>
      </div>
  );
}
export function CompanyDropdown() {
  return (
    <div className=" flex flex-col rounded-lg p-4 h-full text-black gap-2 shadow-lg ">
    <p className="">History</p>
    <p className="">Our Team</p>
    <p className="">Blog</p>
  </div>
  );
}

export function DropdownButton() {
  return (
    <div className="flex justify-between w-full">
      <div className="flex w-full text-black sm:gap-10 items-center justify-between sm:justify-normal p-4 sm:p-0">
        <Image src={logo} alt={"logo"} />
        <Image className="sm:hidden" src={menu} alt={"logo"} />
        <div className=" hidden   sm:flex">
          {" "}
          <LinkButton />
        </div>
      </div>
      <div className="sm:flex  text-black gap-8 hidden">
        <p className="p-2">login</p>
        <button className="border-black border rounded-xl px-4 py-1">
          Register
        </button>
      </div>
    </div>
  );
}





type Props = {};

export function LinkButton() {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 sm:p-2 p-4 sm:justify-between items-start">

<div className="flex flex-col">
      <button className="flex items-center gap-1">
        {" "}
        <p>Features</p> <Image src={arrowDown} alt={"arrowdoun"} />
        <Image className="hidden" src={arrowUp} alt={"arrowdoun"} />
      </button>
     <div className="sm:hidden"> <CompanyDropdown/></div>
      </div>
      <div className="flex flex-col">
      <button className="flex items-center gap-1">
        {" "}
        <p>Company</p> <Image src={arrowDown} alt={"arrowdoun"} />
        <Image className="hidden" src={arrowUp} alt={"arrowdoun"} />
        
      </button>
     <div className="sm:hidden"> <CompanyDropdown /></div>
      </div>
     
      <button>Careers</button>
      <button>About</button>
    </div>
  );
}
