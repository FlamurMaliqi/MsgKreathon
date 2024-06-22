"use client";
import Dialog from "../components/Dialog";
import { useState } from "react";
import TreeTable from "../components/Befunde"
import HeaderNav from "../components/HeaderNav"
import SideNav from "../components/SideNav";

export
default function Home() {

  const [open, setOpen] = useState(false);

  const handleRowClick = (e: any) => {
    console.log(e);
  }

  return (
     <main className="main-grid grid content-center" >
        
        <HeaderNav></HeaderNav>
        <SideNav/>
        <div className="p-4 w-[88vw]">
            <TreeTable onRowClick={handleRowClick}/>
        </div>
        <div onClick={() => setOpen(!open)}>
          <Dialog openToggle={open}/>
        </div>
    </main>
  );
}