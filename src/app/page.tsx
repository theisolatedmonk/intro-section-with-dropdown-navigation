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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   p-4 bg-white">
      <div className="flex justify-between w-full">
        <div className="flex w-full text-black gap-10 items-center">
          <Image src={logo} alt={"logo"} />
          <div className="flex gap-8 p-2 items-center">
            <div className="flex items-center gap-1">
              {" "}
              <p>Features</p> <Image src={arrowDown} alt={"arrowdoun"} />
              <Image className="hidden" src={arrowUp} alt={"arrowdoun"} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {" "}
                <p>Company</p> <Image src={arrowDown} alt={"arrowdoun"} />
                <Image className="hidden" src={arrowUp} alt={"arrowdoun"} />
              </div>
            </div>

            <p>Careers</p>
            <p>About</p>
          </div>
        </div>
        <div className="flex  text-black gap-4">
          <p className="p-2">login</p>
          <button className="border-black border rounded-xl p-2">
            Register
          </button>
        </div>
      </div>
<div className="flex p-20 gap-6 ">
  <div className="flex flex-col gap-14 text-black mt-16">
    <p className="font-bold text-6xl ">Make remote work</p>
    <p className=" text-sm">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
    <button className="rounded-lg bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black  w-28 p-2">Learn more</button>
    <div className="flex items-center gap-4">
      <Image src={databiz} alt={""}/>
      <Image src={audiophile} alt={""}/>
      <Image src={meet} alt={""}/>
      <Image src={maker} alt={""}/>
      </div>
  </div>
<div className="bg-green-300">
<Image className="" src={heroDesktop} alt={""}/>
  </div></div>
      <div className="flex gap-6 absolute top-12 left-24">
        <div className="flex flex-col text-black rounded-lg p-4 gap-2 shadow-lg  ">
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

        <div className=" flex flex-col rounded-lg p-4 h-full text-black gap-2 shadow-lg ">
          <p className="">History</p>
          <p className="">Our Team</p>
          <p className="">Blog</p>
        </div>
      </div>
    </main>
  );
}
