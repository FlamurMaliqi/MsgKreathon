'use client'
import React from 'react';
import CustomGraph from '../components/BluthochdruckGraph';
import HeaderNav from '../components/HeaderNav';
import SideNav from '../components/SideNav';
import GraphWindow from '../components/graph-window';

export default function Home(){

  return (
    <main className="main-grid grid min-h-screen">
      <HeaderNav />
      <SideNav activeID={5}/>
      <div className="bg-white w-[88vw]">
        <GraphWindow initialTab="Bluthochdruck" />
        <div>
          <CustomGraph/>
        </div>
      </div>
    </main>
  );
}
