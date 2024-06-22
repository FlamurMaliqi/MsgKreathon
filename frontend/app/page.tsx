import SideNav from "./components/SideNav";
import HeaderNav from './components/HeaderNav';
import Card from './components/Card';
import AccordionElement from "./components/AccordionElement";

export default function Home() {
  return (
    <main className="main-grid grid min-h-screen">
      <HeaderNav/>
      <SideNav/>
      <div className="content dashboard-grid h-[92vh] overflow-scroll p-4 grid gap-4">
        <Card className="dashboard-area-a"/>
        <Card className="dashboard-area-b"/>
        <Card className="dashboard-area-c"/>
        <Card className="dashboard-area-d"/>
      </div>
    </main>
  );
}
