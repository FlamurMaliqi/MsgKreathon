"use client";
import SideNav from "./components/SideNav";
import HeaderNav from './components/HeaderNav';
import Card from './components/Card';
import Account from "./api/account";
import { useEffect, useState } from "react";
import { Patient, getPatient } from "./api/patient"; 
import { Doctor, getDoctor } from "./api/doctor";
import { IoAddSharp } from "react-icons/io5";
import AddDialog from "./components/AddDialog";

// dashboard
export default function Home() {

  const [personalData, setPersonalData] = useState<string>();
  var patientID = Account.userId;

  useEffect(() => {
    getPatient(patientID).then((patient) => {
      setPersonalData(
        patient.name + "\n" + 
        patient.kvr + "\n" +
        patient.street + " " + patient.houseNumber + " " + patient.postalCode + " " + patient.city + "\n" + 
        patient.phone + "\n" + patient.email + "\n" + patient.birthday
      );
    });
  }, [patientID]);

  
  if (!Account.loggedIn) {
    window.location.href = '/login';
  }

  
  if (Account.isDoctor) {
    // get patientId from URL
    const urlParams = new URLSearchParams(window.location.search);
    patientID = parseInt(urlParams.get('patientId') || "-1");
    if (patientID == -1) {
      alert("No patientId provided in URL");
    }
  }
  const [open, setOpen] = useState(false);
  const [dialogData, setData] = useState({} as any);
  const [dialogContent, setDialogContent] = useState('' as string);

  const handleToggleDialog = () => {
      setOpen(true);
      
      const content = dialogData.diagnose; //dialogData.diagnosis.illness + '\n' + dialogData.diagnosis.description + '\n' + dialogData.diagnosis.severity + '\n' + dialogData.diagnosis.dateDiagnosed;
      setDialogContent(content);
      console.log(content)
  };

  return (
    <main className="main-grid grid min-h-screen">
      <HeaderNav/>
      <SideNav activeID={0}/>
      <div className="content dashboard-grid h-[92vh] overflow-scroll p-4 grid gap-4">
        <Card className="dashboard-area-a" title="Persöhnliche Daten" text={personalData}/>
        <Card className="dashboard-area-b" title="Termine"/>
        <Card className="dashboard-area-c" title="Medikamente"/>
        <Card className="dashboard-area-d" title="Befunde"/>
      </div>
      <span className="absolute z-40 right-4 bottom-4"><IoAddSharp size={50} className="bg-black rounded-[100px] text-white hover:text-[var(--tritary)] hover:bg-[var(--primary)]" onClick={() => handleToggleDialog()}/></span>

      <AddDialog openToggle={open} setOpen={setOpen} title={"Update"} data={"Langer Kontnet"} />
    
    </main>
  );
}