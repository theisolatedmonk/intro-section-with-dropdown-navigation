"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { BiChevronDown } from "react-icons/bi";
import useOnclickOutside from "react-cool-onclickoutside";

import React from "react";
// import Image from "next/image";
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



interface DropdownItemType {
  name: string;
  dropDown: { icon: string; name: string }[];
}
const navItems = [
  {
    name: "Features",
    dropDown: [
      {
        icon: calendar,
        name: "Todo List",
      },
      {
        icon: calendar,
        name: "Calendar",
      },
      {
        icon: calendar,
        name: "Remidders",
      },
    ],
  },
  {
    name: "Company",
    dropDown: [
      {
        icon: calendar,
        name: "Todo List",
      },
      {
        icon: calendar,
        name: "Calendar",
      },
      {
        icon: calendar,
        name: "Remidders",
      },
    ],
  },
  { name: "Careers" },
  { name: "About" },
];

function DropdownItem({ dropDown, name }: DropdownItemType) {
  const [isDropDownOpen, setDropDown] = useState(false);

  const [animationParent] = useAutoAnimate();
  const ref = useOnclickOutside(() => {
    setDropDown(false);
  });

  function openDropDown() {
    console.log("drop down clicked", isDropDownOpen.toString());

    setDropDown(!isDropDownOpen);
  }

  return (
    <div ref={ref}>
      <main
        ref={animationParent}
        onClick={openDropDown}
        className="relative cursor-pointer"
      >
        <div className="flex gap-2 items-center">
          <p>{name}</p>
          <BiChevronDown
            className={clsx(" transition-all", {
              "rotate-180 ": isDropDownOpen,
            })}
          />
        </div>
        {isDropDownOpen && (
          <div className="flex flex-col text-black rounded-lg p-4 gap-2 sm:shadow-lg  border-2 sm:absolute   bg-white  h-auto  w-36 ">
            {dropDown.map((item) => (
              <div className="flex gap-2 bg-yellow-200 w-full items-center ">
                {item && (
                  <Image
                    src={item.icon}
                    className=""
                    alt={"Todo List"}
                  />
                )}
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

type Props = {};
export function NavItem({}: Props) {
  return (
    <div className="sm:flex-row flex flex-col text-black rounded-lg  gap-2  ">
      {/* {navItems.map((item) => (
            <section>
              {item.dropDown ? (
                <DropdownItem dropDown={item.dropDown} name={item.name} />
              ) : (
                <p>{item.name}</p>
              )}
            </section>   
          ))} */}

      {navItems.map((item, index) => (
        <div key={index} className="flex  items-center gap-2 ">
          {item.dropDown ? (
            <DropdownItem dropDown={item.dropDown} name={item.name} />
          ) : (
            <p>{item.name}</p>
          )}
        </div>
      ))}
    </div>
  );
}



