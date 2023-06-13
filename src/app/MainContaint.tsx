'use client'
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
import { markAsUntransferable } from "worker_threads";

type Props = {}

export default function MainContaint({}: Props) {
  return (
    <div className="flex sm:flex-row flex-col justify-between  gap- sm:p-[70px] ">
        <Image className=" flex sm:hidden " src={heroMobile} alt={""} />
        <div className="flex  justify-between flex-col sm:gap-14  text-black sm:w-[70%] sm:px-11  text-left sm:py-20 items-center sm:items-start  p-4 gap-10 ">
          <p className="font-bold sm:text-6xl text-4xl text-center sm:text-left">
            Make remote work
          </p>
          <p className=" text-center sm:text-left">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="rounded-lg bg-black text-white hover:bg-white hover:text-black hover:ring-1 hover:ring-black  w-28 p-2 ">
            Learn more
          </button>
          <div className="flex items-center justify-between  sm:gap-8 h-full w-auto gap-2  mb-4">
            <Image className="w-20 h-auto" src={databiz} alt={""} />
            <Image className="w-20 h-auto" src={audiophile} alt={""} />
            <Image className="w-20 h-auto" src={meet} alt={""} />
            <Image className="w-20 h-auto" src={maker} alt={""} />
          </div>
        </div>
        <div className=" sm:flex hidden h-full w-full    justify-end">
          <Image className=" h-auto w-[65%]  " src={heroDesktop} alt={""} />
        </div>

       
      </div>
  )
}