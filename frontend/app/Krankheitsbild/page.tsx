import Krankheitsbild from "../components/Krankheitsbild"
import HeaderNav from "../components/HeaderNav"
import SideNav from "../components/SideNav";



export
 default function Home() {
  return (
    <main>
    <HeaderNav></HeaderNav>
    <div className="grid grid-cols-2">
        <div className = "col-fixed" style='width:100px'>
            <SideNav></SideNav>
        </div>
        <div className ="col">
            <Krankheitsbild></Krankheitsbild>
        </div>
    </div>
    </main>
  );
}