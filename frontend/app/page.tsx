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
import account from './api/account';
import { getDrugs } from "./api/drug";
import { getReport, getReports } from "./api/report";

// dashboard
export default function Home() {

  const [personalData, setPersonalData] = useState<string>();
  const [drugs, setDrugs] = useState<string>();
  const [reports, setReports] = useState<string>();
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

    getDrugs(patientID).then((drugs) => {
      var drugString = "";
      drugs.forEach((drug) => {
        drugString += drug.name + " " + drug.dosage + "\n";
      });
      setDrugs(drugString);
    });

    getReports(patientID, ).then((reports) => {
      var reportString = "";
      reports.forEach((report) => {
        reportString +=  report.diagnosis.illness  + " - "+ report.findings + "\n";
      });
      setReports(reportString);
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
      window.location.href = '/choosePatient';
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
        <Card className="dashboard-area-c" title="Medikamente" text={drugs}/>
        <Card className="dashboard-area-d" title="Befunde" text={reports}/>
      </div>
      <span className={account.isDoctor ? "absolute z-40 right-4 bottom-4" : "hidden"}><IoAddSharp size={50} className="bg-black rounded-[100px] text-white hover:text-[var(--tritary)] hover:bg-[var(--primary)]" onClick={() => handleToggleDialog()}/></span>

      <AddDialog openToggle={open} setOpen={setOpen} title={"Update"} data={"Langer Kontnet"} />
    
    </main>
  );
}