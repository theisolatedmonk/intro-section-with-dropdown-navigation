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
    <main className="flex min-h-screen flex-col  sm:py-4 sm:px-8 bg-white w-full h-full gap-4 sm:gap-0 ">
      <div className="flex justify-between w-full">
        <div className="flex w-full text-black sm:gap-10 items-center justify-between sm:justify-norma p-4 sm:p-0">
          <Image src={logo} alt={"logo"} />
          <Image className="sm:hidden" src={menu} alt={"logo"} />
          <div className=" hidden gap-8 p-2 items-center sm:flex">
            <button className="flex items-center gap-1">
              {" "}
              <p>Features</p> <Image src={arrowDown} alt={"arrowdoun"} />
              <Image className="hidden" src={arrowUp} alt={"arrowdoun"} />
            </button>
           
              <button className="flex items-center gap-1">
                {" "}
                <p>Company</p> <Image src={arrowDown} alt={"arrowdoun"} />
                <Image className="hidden" src={arrowUp} alt={"arrowdoun"} />
              </button>
            

            <button>Careers</button>
            <button>About</button>
          </div>
        </div>
        <div className="sm:flex  text-black gap-8 hidden">
          <p className="p-2">login</p>
          <button className="border-black border rounded-xl px-4 py-1">
            Register
          </button>
        </div>
      </div>
<div className="flex sm:flex-row flex-col justify-between  gap- sm:p-[70px] ">
<Image className=" flex sm:hidden " src={heroMobile} alt={""}/>
  <div className="flex  justify-between flex-col sm:gap-14  text-black sm:w-[44%] sm:px-11  text-left sm:py-20 items-center sm:items-start  p-4 gap-6 bg-slate-500">
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
  <Image className="h-[460px] w-[40%] sm:flex hidden " src={heroDesktop} alt={""}/>

</div>
      <div className="sm:flex  gap-6 absolute top-12 left-28 hidden ">
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
      <div className="absolute w-52 right-0 h-full bg-yellow-100 sm:hidden"></div>
    </main>
  );
}
