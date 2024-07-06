import { Collapsible } from "@radix-ui/react-collapsible";
import React from "react";
import { Button } from "../ui/button";
import { Award, BarChart2, StickyNote } from "lucide-react";

function SideBar() {
  return (
    <div className="mt-20">
      <div className="w-32 ">
        <Button className="bg-white text-slate-400 gap-5 font-extrabold hover:border-blue-500 hover:bg-slate-100 rounded-r-full p-6">
          <BarChart2 /> <h3 className="mr-12">Dashboard</h3>
        </Button>
      </div>
      <div className="w-32 mt-2">
        <Button className="text-blue-600 gap-5 font-extrabold hover:border-blue-500 bg-slate-100 rounded-r-full hover:bg-slate-200  p-6">
          <Award /> <h3 className="mr-16">Skill Test</h3>
        </Button>
      </div>
      <div className="w-32 mt-2">
        <Button className="bg-white text-slate-400 gap-5 font-extrabold hover:border-blue-500 hover:bg-slate-100 rounded-r-full p-6">
          <StickyNote /> <h3 className="mr-14">Internship</h3>
        </Button>
      </div>
    </div>
  );
}

export default SideBar;
