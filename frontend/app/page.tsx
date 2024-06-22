"use client";
import SideNav from "./components/SideNav";
import HeaderNav from './components/HeaderNav';
import Card from './components/Card';

// dashboard
export default function Home() {
  return (
    <main className="main-grid grid min-h-screen">
      <HeaderNav/>
      <SideNav/>
      <div className="content dashboard-grid h-[92vh] overflow-scroll p-4 grid gap-4">
        <Card className="dashboard-area-a" title="Persöhnliche Daten"/>
        <Card className="dashboard-area-b" title="Termine"/>
        <Card className="dashboard-area-c" title="Medikamente"/>
        <Card className="dashboard-area-d" title="Befunde"/>
      </div>
    </main>
  );
}
