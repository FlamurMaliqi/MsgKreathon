"use client";
import Befunde from "../components/Befunde"
import HeaderNav from "../components/HeaderNav"
import SideNav from "../components/SideNav";
import AddDialog from "../components/AddDialog";
import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";

export
default function Home() {
  const [open, setOpen] = useState(false);

  const handleToggleDialog = () => {
    setOpen(true);
};

  return (
     <main className="main-grid grid content-center" >
        
        <HeaderNav></HeaderNav>
        <SideNav activeID={1}/>
        <div className="p-4 w-[88vw]">
            <Befunde/>
        </div>
        <span className="absolute z-40 right-4 bottom-4"><IoAddSharp size={50} className="bg-black rounded-[100px] text-white hover:text-[var(--tritary)] hover:bg-[var(--primary)]" onClick={() => handleToggleDialog()}/></span>
        
        <AddDialog openToggle={open} setOpen={setOpen} title={"Update"} data={"Langer Kontnet"} />
    </main>
  );
}