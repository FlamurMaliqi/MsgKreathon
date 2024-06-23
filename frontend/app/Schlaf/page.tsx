'use client'
import React from 'react';
import CustomGraph from '../components/SchlafGraph';
import HeaderNav from '../components/HeaderNav';
import SideNav from '../components/SideNav';
import GraphWindow from '../components/graph-window';

export default function Home(){
  return (
    <main className="main-grid grid min-h-screen">
      <HeaderNav/>
      <SideNav />
      <div>
        <GraphWindow initialTab="Schlaf"/>
        <div>
          <CustomGraph/>
        </div>
      </div>
    </main>
  );
}
