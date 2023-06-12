'use client'
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
// import NavItem from "./test/page";
import { NavItem } from "./Dropdown";

// import { CompanyDropdown, DropdownButton, FeaturesDropdown, LinkButton } from "./Dropdown";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  sm:py-4 sm:px-8 bg-white w-full h-full gap-4 sm:gap-0 ">
     
     <NavItem/>
     {/* <DropdownButton/> */}
<div className="flex sm:flex-row flex-col justify-between  gap- sm:p-[70px] ">
<Image className=" flex sm:hidden " src={heroMobile} alt={""}/>
  <div className="flex  justify-between flex-col sm:gap-14  text-black sm:w-[70%] sm:px-11  text-left sm:py-20 items-center sm:items-start  p-4 gap-10 ">
    <p className="font-bold sm:text-6xl text-4xl text-center sm:text-left">Make remote work</p>
    <p className=" text-center sm:text-left">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
    <button className="rounded-lg bg-black text-white hover:bg-white hover:text-black hover:ring-1 hover:ring-black  w-28 p-2 ">Learn more</button>
    <div className="flex items-center justify-between  sm:gap-8 h-full w-auto gap-2  mb-4">
      <Image  className="w-20 h-auto" src={databiz} alt={""}/>
      <Image className="w-20 h-auto" src={audiophile} alt={""}/>
      <Image className="w-20 h-auto" src={meet} alt={""}/>
      <Image className="w-20 h-auto" src={maker} alt={""}/>
      </div>

  </div>
  <div className=" sm:flex hidden h-full w-full    justify-end"><Image className=" h-auto w-[65%]  " src={heroDesktop} alt={""}/></div>

  <div className="  hidden sm:flex  gap-6 absolute top-12 left-28  ">
{/*      
     <FeaturesDropdown/>
     <CompanyDropdown/> */}
       
     </div>
</div>

      <div className="absolute w-full flex  bg-black bg-opacity-60 sm:hidden right-0 justify-end  h-full">
      <div className="w-[60%] right-0  h-full bg-gray-100 text-black p-4">
      <div className="w-full flex  justify-end ">
        <Image className=" " src={close} alt={""}/>
        </div>
        {/* <LinkButton /> */}
        <div className="flex  text-black gap-4 items-center flex-col ">
        <p className="p-2">Login</p>
        <button className="border-black border rounded-xl p-2 w-full">
          Register
        </button>
      </div>
      </div>

      </div>
    </main>
  );
}
