    import Krankheitsbild from "../components/Krankheitsbild"
import HeaderNav from "../components/HeaderNav"
import SideNav from "../components/SideNav";



export
 default function Home() {
  return (
    <main className="main-grid grid">
    <HeaderNav></HeaderNav>
    <SideNav/>
      <div className="content h-[92vh] overflow-scroll p-4">
        <Krankheitsbild />
      </div>
    </main>
  );
}