    import Krankheitsbild from "../components/Krankheitsbild"
import HeaderNav from "../components/HeaderNav"
import SideNav from "../components/SideNav";
import AccordionElement from "../components/AccordionElement";  



export
 default function Home() {
  return (
    <main className="main-grid grid">
    <HeaderNav></HeaderNav>
    <SideNav/>
      <div className="content h-[92vh] overflow-scroll p-4">
        <AccordionElement labels={["Allergie"]} values={["Gräser Roggen"]}/>
        <Krankheitsbild />
      </div>
    </main>
  );
}