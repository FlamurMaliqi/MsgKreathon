import TreeTable from "../components/TreeTable"
import HeaderNav from "../components/HeaderNav"
import SideNav from "../components/SideNav";

export
 default function Home() {
  return (
     <main className="main-grid grid content-center" >
        
        <HeaderNav></HeaderNav>
        <SideNav/>
        <div className="m-4">
            <TreeTable></TreeTable>
        </div>

    </main>
  );
}