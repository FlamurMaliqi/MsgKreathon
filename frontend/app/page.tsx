import SideNav from "./components/SideNav";
import HeaderNav from './components/HeaderNav';
import Card from './components/Card';
import AccordionElement from "./components/AccordionElement";

export default function Home() {
  return (
    <main className="main-grid grid min-h-screen">
      <HeaderNav/>
      <SideNav/>
      <div className="content h-[92vh] overflow-scroll p-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </main>
  );
}
