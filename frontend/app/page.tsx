import SideNav from "./components/SideNav";
import HeaderNav from './components/HeaderNav';
import Card from './components/Card';

export
 default function Home() {
  return (
    <main className="grid min-h-screen">
      <HeaderNav/>
      <SideNav/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </main>
  );
}
