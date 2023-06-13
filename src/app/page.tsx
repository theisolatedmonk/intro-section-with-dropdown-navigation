
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
import Header from "./Header";
import MainContaint from "./MainContaint";

// import { CompanyDropdown, DropdownButton, FeaturesDropdown, LinkButton } from "./Dropdown";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   bg-white w-full h-full gap-4 sm:gap-0 ">


      <Header/>
    
      <MainContaint/>
    </main>
  );
}
