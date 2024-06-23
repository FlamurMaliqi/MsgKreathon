'use client'
import React from 'react';
import CustomGraph from '../components/BlutzuckerGraph';
import HeaderNav from '../components/HeaderNav';
import SideNav from '../components/SideNav';
import GraphWindow from '../components/graph-window';

export default function Home(){
  return (
    <main className="main-grid grid min-h-screen">
      <HeaderNav />
      <SideNav activeID={5}/>
      <div>
        <GraphWindow initialTab="Blutzucker"/>
        <div>
          <CustomGraph/>
        </div>
      </div>
    </main>
  );
}
