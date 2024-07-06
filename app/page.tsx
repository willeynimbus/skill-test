import Main from "@/components/Main/Main";
import Navbar from "@/components/Navbar/Navbar";
import SideBar from "@/components/SideBar.tsx/SideBar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Separator />
      </div>
      <div className="flex flex-row ">
        <SideBar />
        <div className="h-screen  border-l border-gray-300 ml-24"></div>
        <Main />
      </div>
    </>
  );
}
