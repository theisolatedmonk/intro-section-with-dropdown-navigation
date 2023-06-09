"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { BiChevronDown } from "react-icons/bi";
import useOnclickOutside from "react-cool-onclickoutside";

import React from "react";
;
import calendar from "@/images/icon-calendar.svg";
import planning from "@/images/icon-planning.svg";
import reminders from "@/images/icon-reminders.svg";
import todo from "@/images/icon-todo.svg";



interface DropdownItemType {
  name: string;
  dropDown: { icon: string; name: string }[];
}
const navItems = [
  {
    name: "Features",
    dropDown: [
      {
        icon: todo,
        name: "Todo List",
      },
      {
        icon: calendar,
        name: "Calendar",
      },
      {
        icon: reminders,
        name: "Remidders",
      },{
        icon: planning,
        name: "Planning",
      },
    ],
  },
  {
    name: "Company",
    dropDown: [
      {
        icon: '',
        name: "History",
      },
      {
        icon: '',
        name: "Our Team",
      },
      {
        icon: '',
        name: "Blog",
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
        className="relative cursor-pointer "
      >
        <div className="flex gap-2  items-center">
          <p>{name}</p>
          <BiChevronDown
            className={clsx(" transition-all", {
              "rotate-180 ": isDropDownOpen,
            })}
          />
        </div>
        {isDropDownOpen && (
          <div className="flex flex-col text-black rounded-lg p-4 gap-2   sm:shadow-lg  border-2 sm:absolute   bg-white  h-auto  w-36 sm: sm:mt-3 ">
            {dropDown.map((item) => (
              <div className="flex gap-2  w-full items-center ">
                {item && (
                  <Image
                    src={item.icon}
                    className=""
                    alt={""}
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
    <div className="sm:flex-row flex flex-col text-black rounded-lg  gap-2 sm:gap-6  ">
     

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



