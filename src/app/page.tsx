

import Header from "./Header";
import MainContaint from "./MainContaint";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   bg-white w-full h-full gap-4 sm:gap-0 p-2">

      <Header/>
  
      <MainContaint/>
    </main>
  );
}
