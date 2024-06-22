"use client";
import TreeTable from "../components/Befunde"
import HeaderNav from "../components/HeaderNav"
import SideNav from "../components/SideNav";

export
default function Home() {

  return (
     <main className="main-grid grid content-center" >
        
        <HeaderNav></HeaderNav>
        <SideNav/>
        <div className="p-4">
            <TreeTable/>
        </div>

    </main>
  );
}